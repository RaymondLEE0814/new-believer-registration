import React, { useState } from 'react';

function Step2({ formData, onPrev, onSubmit, isSubmitting }) {
  const [localData, setLocalData] = useState({
    allergies: formData.allergies,
    parentPhone: formData.parentPhone,
    address: formData.address,
    notes: formData.notes,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmitClick = () => {
    if (!localData.parentPhone) {
      setError('부모님 연락처는 필수 입력 항목입니다.');
      return;
    }
    onSubmit(localData);
  };

  return (
    <div>
      <div className="form-group">
        <label>부모님 연락처 *</label>
        <input 
          type="tel" 
          name="parentPhone" 
          value={localData.parentPhone} 
          onChange={handleChange} 
          placeholder="010-0000-0000" 
        />
      </div>

      <div className="form-group">
        <label>집 주소</label>
        <input 
          type="text" 
          name="address" 
          value={localData.address} 
          onChange={handleChange} 
          placeholder="동, 호수까지 상세히 적어주세요" 
        />
      </div>

      <div className="form-group">
        <label>알러지 및 주의사항</label>
        <textarea 
          name="allergies" 
          value={localData.allergies} 
          onChange={handleChange} 
          placeholder="특정 음식 알러지나 건강상 주의할 점이 있다면 적어주세요"
          rows="2"
        />
      </div>

      <div className="form-group">
        <label>기타 전달사항</label>
        <textarea 
          name="notes" 
          value={localData.notes} 
          onChange={handleChange} 
          placeholder="선생님께 남기고 싶은 말씀"
          rows="2"
        />
      </div>

      {error && <span className="error-message">{error}</span>}
      
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
        <button className="btn btn-secondary" onClick={onPrev}>
          이전으로
        </button>
        <button className="btn" onClick={handleSubmitClick} disabled={isSubmitting}>
          {isSubmitting ? '등록 중...' : '등록 완료하기'}
        </button>
      </div>
    </div>
  );
}

export default Step2;
