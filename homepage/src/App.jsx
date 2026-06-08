import React, { useState } from 'react';
import './index.css';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import { Heart } from 'lucide-react';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    grade: '',
    classNumber: '',
    birthdate: '',
    allergies: '',
    parentPhone: '',
    address: '',
    notes: ''
  });

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (data) => {
    const finalData = { ...formData, ...data };
    console.log("=== 제출된 새신자 데이터 ===", finalData);
    setStep(3); // 완료 화면으로
  };

  return (
    <div className="app-container">
      {step < 3 && (
        <div className="header">
          <h1>초등부 새신자 등록 <Heart className="inline-block text-primary" size={24} color="#f7a072" style={{verticalAlign: 'bottom'}} /></h1>
          <p>환영합니다! 등록카드를 작성해주세요.</p>
        </div>
      )}

      {step < 3 && (
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: step === 1 ? '50%' : '100%' }}></div>
        </div>
      )}

      <div className="fade-in">
        {step === 1 && (
          <Step1 formData={formData} onNext={handleNext} />
        )}
        {step === 2 && (
          <Step2 formData={formData} onPrev={handlePrev} onSubmit={handleSubmit} />
        )}
        {step === 3 && (
          <Step3 />
        )}
      </div>
    </div>
  );
}

export default App;
