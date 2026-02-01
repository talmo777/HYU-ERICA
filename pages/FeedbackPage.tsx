import React from 'react';
import { AIRTABLE_FEEDBACK_FORM_URL } from '../constants';
import { MessageSquarePlus } from 'lucide-react';

const FeedbackPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-200px)] flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <MessageSquarePlus className="text-blue-900" />
                Feedback
            </h1>
            <p className="text-slate-500 text-sm mt-1">
                서비스 이용 중 불편한 점이나 추가하고 싶은 기능이 있다면 알려주세요.
            </p>
        </div>
      </div>

      <div className="flex-grow bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden relative">
        {AIRTABLE_FEEDBACK_FORM_URL ? (
          <iframe
            className="airtable-embed"
            src={AIRTABLE_FEEDBACK_FORM_URL}
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ background: 'transparent', height: '100%' }}
            title="Feedback Form"
          ></iframe>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-50">
             <MessageSquarePlus size={48} className="mb-4 opacity-50" />
             <p className="text-lg font-medium">피드백 폼 준비중입니다.</p>
             <p className="text-sm mt-2">constants.ts 파일의 AIRTABLE_FEEDBACK_FORM_URL 값을 설정해주세요.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
