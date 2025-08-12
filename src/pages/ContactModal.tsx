
import { Phone, X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-2xl p-8 mx-4 max-w-md w-full animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <X size={24} />
        </button>
        
        {/* Content */}
        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Contact Me</h3>
            <p className="text-gray-400">Ready to start a conversation?</p>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
            <p className="text-gray-300 mb-2">Call me directly at:</p>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              +255 698809207
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={() => window.location.href = 'tel:+255698809207'}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </button>
            <button
              onClick={() => window.location.href = 'sms:+255698809207'}
              className="flex-1 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Send SMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
