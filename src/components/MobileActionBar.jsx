import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { getPhoneLink, getWhatsAppLink } from '../utils/helpers';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg lg:hidden">
      <div className="flex">
        <a
          href={getPhoneLink()}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-td-charcoal hover:bg-td-red/5 transition-colors"
        >
          <Phone size={18} />
          <span className="text-sm font-semibold">Call</span>
        </a>
        <div className="w-px bg-gray-200"></div>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-green-600 hover:bg-green-50 transition-colors"
        >
          <MessageCircle size={18} />
          <span className="text-sm font-semibold">WhatsApp</span>
        </a>
        <div className="w-px bg-gray-200"></div>
        <Link
          to="/booking"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-td-red text-white hover:bg-td-red-dark transition-colors"
        >
          <Calendar size={18} />
          <span className="text-sm font-semibold">Book</span>
        </Link>
      </div>
    </div>
  );
}
