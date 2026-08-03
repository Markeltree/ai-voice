import { useEffect, useRef, useState } from 'react';
import Vapi from '@vapi-ai/web';
import { Mic, PhoneOff, Loader2 } from 'lucide-react';

const PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY;
const ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID;

const STATUS_LABEL = {
  idle: 'Talk to us',
  connecting: 'Connecting…',
  connected: 'Listening…',
  speaking: 'Speaking…',
};

export default function VoiceWidget() {
  const [status, setStatus] = useState('idle');
  const vapiRef = useRef(null);

  useEffect(() => {
    const vapi = new Vapi(PUBLIC_KEY);
    vapiRef.current = vapi;

    vapi.on('call-start', () => setStatus('connected'));
    vapi.on('speech-start', () => setStatus('speaking'));
    vapi.on('speech-end', () => setStatus('connected'));
    vapi.on('call-end', () => setStatus('idle'));
    vapi.on('error', (e) => {
      console.error('Vapi error:', e);
      setStatus('idle');
    });

    return () => {
      vapi.stop();
    };
  }, []);

  const isActive = status !== 'idle';

  const handleClick = () => {
    if (isActive) {
      vapiRef.current.stop();
      return;
    }
    setStatus('connecting');
    vapiRef.current.start(ASSISTANT_ID);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {isActive && (
        <span className="rounded-full bg-[#24242D] px-4 py-1.5 text-sm font-medium text-white shadow-lg">
          {STATUS_LABEL[status]}
        </span>
      )}

      <button
        onClick={handleClick}
        aria-label={isActive ? 'End voice call' : 'Start voice call'}
        className={`relative flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all hover:scale-105 ${
          isActive
            ? 'bg-red-500 text-white'
            : 'bg-[#4F46E5] text-white'
        }`}
      >
        {status === 'connecting' && <Loader2 size={26} className="animate-spin" />}
        {status === 'idle' && <Mic size={26} />}
        {(status === 'connected' || status === 'speaking') && <PhoneOff size={24} />}
        {status === 'speaking' && (
          <span className="absolute h-16 w-16 rounded-full bg-[#4F46E5] opacity-40 animate-ping" />
        )}
      </button>
    </div>
  );
}
