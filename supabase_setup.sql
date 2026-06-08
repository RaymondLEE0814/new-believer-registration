-- 초등부 새신자 등록 테이블 생성
CREATE TABLE public.new_believers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    school TEXT,
    grade TEXT NOT NULL,
    class_number TEXT,
    birthdate DATE,
    parent_phone TEXT NOT NULL,
    address TEXT,
    allergies TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 보안 규칙 (RLS) 설정: 누구나 데이터를 추가(Insert)할 수 있도록 허용
ALTER TABLE public.new_believers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for anonymous users" 
ON public.new_believers 
FOR INSERT 
WITH CHECK (true);

-- (선택) 외부에서 데이터를 조회(Select)할 수는 없도록 보안 강화
-- 만약 대시보드(관리자 페이지)를 별도로 만들 경우, 인증된 관리자만 Select 할 수 있도록 정책을 추가해야 합니다.
