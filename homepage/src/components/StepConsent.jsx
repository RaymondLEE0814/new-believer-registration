import React, { useState } from 'react';

function StepConsent({ onNext }) {
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleNextClick = () => {
    if (!agreed) {
      setError('개인정보 수집 및 이용에 동의해주셔야 등록이 가능합니다.');
      return;
    }
    onNext();
  };

  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '500', marginBottom: '16px', color: 'var(--colors-ink)' }}>
        개인정보 수집 및 이용 동의
      </h2>

      <div className="terms-box">
        <p><strong>1. 수집 목적</strong></p>
        <p>교회학교 학생 관리, 비상 연락, 공지사항 전달, 출결 및 심방 관리</p>
        <br />
        <p><strong>2. 수집 항목</strong></p>
        <p>이름, 학교, 학년, 반, 생년월일, 부모님 연락처, 집 주소, 알러지 및 특이사항 등</p>
        <br />
        <p><strong>3. 보유 및 이용 기간</strong></p>
        <p>교회학교 졸업 또는 탈퇴 시까지 (이후 지체 없이 파기)</p>
        <br />
        <p>※ 귀하는 본 개인정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시 새신자 등록이 제한될 수 있습니다.</p>
      </div>

      <div className="form-group" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
        <input 
          type="checkbox" 
          id="consent-check" 
          checked={agreed}
          onChange={(e) => {
            setAgreed(e.target.checked);
            if (e.target.checked) setError('');
          }}
          style={{ width: '24px', height: '24px', marginRight: '12px', cursor: 'pointer' }}
        />
        <label htmlFor="consent-check" style={{ margin: 0, cursor: 'pointer', fontSize: '16px' }}>
          (필수) 위 개인정보 수집 및 이용에 동의합니다.
        </label>
      </div>

      {error && <span className="error-message">{error}</span>}
      
      <button className="btn" onClick={handleNextClick} style={{ marginTop: '24px' }}>
        동의하고 등록 시작하기
      </button>
    </div>
  );
}

export default StepConsent;
