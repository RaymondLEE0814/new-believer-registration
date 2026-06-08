import React from 'react';
import { PartyPopper, Sparkles } from 'lucide-react';

function Step3() {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ 
        display: 'inline-flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: '80px', 
        height: '80px', 
        borderRadius: '50%', 
        backgroundColor: 'var(--secondary-color)', 
        color: 'white',
        marginBottom: '24px'
      }}>
        <PartyPopper size={40} />
      </div>
      
      <h2 style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '16px' }}>
        등록이 완료되었습니다!
      </h2>
      
      <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'var(--text-color)', marginBottom: '32px' }}>
        우리 교회학교의 새로운 가족이 되신 것을<br/>
        진심으로 환영합니다. <Sparkles size={20} className="inline-block" color="#f7a072" style={{verticalAlign: 'middle', display: 'inline-block'}}/>
      </p>

      <div style={{ 
        backgroundColor: '#fff', 
        padding: '20px', 
        borderRadius: 'var(--border-radius)', 
        border: '2px dashed var(--secondary-color)'
      }}>
        <p style={{ fontSize: '15px', color: '#666' }}>
          입력해주신 정보는 담당 선생님께 전달되며,<br/>
          곧 연락드리도록 하겠습니다.
        </p>
      </div>
    </div>
  );
}

export default Step3;
