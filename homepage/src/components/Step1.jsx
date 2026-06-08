import React, { useState } from 'react';

function Step1({ formData, onNext }) {
  const [localData, setLocalData] = useState({
    name: formData.name,
    school: formData.school,
    grade: formData.grade,
    classNumber: formData.classNumber,
    birthdate: formData.birthdate,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleNextClick = () => {
    if (!localData.name || !localData.grade) {
      setError('이름과 학년은 필수 입력 항목입니다.');
      return;
    }
    onNext(localData);
  };

  return (
    <div>
      <div className="form-group">
        <label>이름 *</label>
        <input 
          type="text" 
          name="name" 
          value={localData.name} 
          onChange={handleChange} 
          placeholder="아이의 이름을 입력해주세요" 
        />
      </div>

      <div className="form-group">
        <label>학교</label>
        <input 
          type="text" 
          name="school" 
          value={localData.school} 
          onChange={handleChange} 
          placeholder="예: ○○초등학교" 
        />
      </div>

      <div className="form-row">
        <div className="form-group" style={{ flex: 1 }}>
          <label>학년 *</label>
          <select name="grade" value={localData.grade} onChange={handleChange}>
            <option value="">선택</option>
            {[1, 2, 3, 4, 5, 6].map(g => (
              <option key={g} value={`${g}학년`}>{g}학년</option>
            ))}
          </select>
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label>반</label>
          <input 
            type="number" 
            name="classNumber" 
            value={localData.classNumber} 
            onChange={handleChange} 
            placeholder="숫자만" 
          />
        </div>
      </div>

      <div className="form-group">
        <label>생년월일</label>
        <input 
          type="date" 
          name="birthdate" 
          value={localData.birthdate} 
          onChange={handleChange} 
        />
      </div>

      {error && <span className="error-message">{error}</span>}
      
      <button className="btn" onClick={handleNextClick} style={{ marginTop: '20px' }}>
        다음으로 넘어가기
      </button>
    </div>
  );
}

export default Step1;
