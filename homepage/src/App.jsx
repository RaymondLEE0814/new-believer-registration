import React, { useState } from 'react';
import './index.css';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import { Heart } from 'lucide-react';
import { supabase } from './lib/supabaseClient';

function App() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (data) => {
    const finalData = { ...formData, ...data };
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('new_believers')
        .insert([
          {
            name: finalData.name,
            school: finalData.school,
            grade: finalData.grade,
            class_number: finalData.classNumber,
            birthdate: finalData.birthdate || null,
            parent_phone: finalData.parentPhone,
            address: finalData.address,
            allergies: finalData.allergies,
            notes: finalData.notes,
          }
        ]);

      if (error) throw error;
      
      setStep(3); // 완료 화면으로
    } catch (error) {
      console.error('Error saving data:', error);
      alert('데이터 저장 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
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
          <Step2 formData={formData} onPrev={handlePrev} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        )}
        {step === 3 && (
          <Step3 />
        )}
      </div>
    </div>
  );
}

export default App;
