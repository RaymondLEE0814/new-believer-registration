import React from 'react';
import { CheckCircle2 } from 'lucide-react';

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
        backgroundColor: 'var(--colors-surface-soft)', 
        color: 'var(--colors-ink)',
        marginBottom: '24px',
        border: '1px solid var(--colors-hairline)'
      }}>
        <CheckCircle2 size={40} />
      </div>
      
      <h2 style={{ 
        fontFamily: 'var(--font-display)',
        color: 'var(--colors-ink)', 
        fontSize: '28px', 
        fontWeight: '500',
        marginBottom: '16px' 
      }}>
        등록이 완료되었습니다
      </h2>
      
      <p style={{ 
        fontSize: '16px', 
        lineHeight: '1.6', 
        color: 'var(--colors-body)', 
        marginBottom: '32px' 
      }}>
        입력해주신 정보는 담당 선생님께 전달되며,<br/>
        곧 연락드리도록 하겠습니다.
      </p>

      <div style={{ 
        backgroundColor: 'var(--colors-canvas)', 
        padding: '24px', 
        borderRadius: 'var(--rounded-lg)', 
        border: '1px solid var(--colors-hairline)'
      }}>
        <p style={{ fontSize: '14px', color: 'var(--colors-charcoal)' }}>
          우리 교회학교의 새로운 가족이 되신 것을<br/>
          진심으로 환영합니다.
        </p>
      </div>
    </div>
  );
}

export default Step3;
