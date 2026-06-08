import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import './Admin.css';

function Admin() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      fetchData();
    }
  }, [session]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setErrorMsg('로그인 실패: 이메일 또는 비밀번호를 확인해주세요.');
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const fetchData = async () => {
    setLoading(true);
    const { data: believers, error } = await supabase
      .from('new_believers')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching data:', error);
      setErrorMsg('데이터를 불러오는데 실패했습니다.');
    } else {
      setData(believers);
    }
    setLoading(false);
  };

  const formatDate = (dateString) => {
    const d = new Date(dateString);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  };

  if (!session) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-box">
          <h2>관리자 로그인</h2>
          <p>새신자 목록을 조회하기 위해 로그인해주세요.</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>이메일</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                placeholder="admin@example.com"
              />
            </div>
            <div className="form-group">
              <label>비밀번호</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            {errorMsg && <p className="error-message">{errorMsg}</p>}
            <button className="btn" type="submit" disabled={loading}>
              {loading ? '로그인 중...' : '로그인'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>새신자 등록 현황</h1>
        <button onClick={handleLogout} className="btn-logout">로그아웃</button>
      </header>

      <main className="admin-main">
        <div className="table-container">
          {loading ? (
            <p className="loading-text">데이터를 불러오는 중입니다...</p>
          ) : data.length === 0 ? (
            <p className="empty-text">아직 등록된 새신자가 없습니다.</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>등록일시</th>
                  <th>이름</th>
                  <th>학교/학년/반</th>
                  <th>생년월일</th>
                  <th>부모님 연락처</th>
                  <th>주소</th>
                  <th>알러지 및 특이사항</th>
                  <th>기타 메모</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{formatDate(item.created_at)}</td>
                    <td><strong>{item.name}</strong></td>
                    <td>{item.school ? `${item.school} ` : ''}{item.grade} {item.class_number ? `${item.class_number}반` : ''}</td>
                    <td>{item.birthdate || '-'}</td>
                    <td>{item.parent_phone}</td>
                    <td>{item.address || '-'}</td>
                    <td>{item.allergies || '-'}</td>
                    <td>{item.notes || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}

export default Admin;
