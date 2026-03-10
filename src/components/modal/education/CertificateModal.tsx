import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, ZoomIn, ZoomOut, Maximize2, Download, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ 
  isOpen, 
  onClose, 
  imageUrl, 
  title 
}) => {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => setZoom(1);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '_')}_Certificate.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 backdrop-blur-xl p-4 md:p-10"
          onClick={onClose}
        >
          {/* Controls */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md z-[110]"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={handleZoomOut} className="p-2 hover:text-accent transition-colors" title="Zoom Out"><ZoomOut size={20} /></button>
            <button onClick={handleResetZoom} className="px-3 text-sm font-bold hover:text-accent transition-colors">{Math.round(zoom * 100)}%</button>
            <button onClick={handleZoomIn} className="p-2 hover:text-accent transition-colors" title="Zoom In"><ZoomIn size={20} /></button>
            <div className="w-px h-4 bg-white/10 mx-2" />
            <button onClick={toggleFullscreen} className="p-2 hover:text-accent transition-colors" title="Toggle Fullscreen"><Maximize2 size={20} /></button>
            <button onClick={handleDownload} className="p-2 hover:text-accent transition-colors" title="Download"><Download size={20} /></button>
          </motion.div>

          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all z-[110] border border-white/10"
          >
            <X size={24} />
          </button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full h-full flex items-center justify-center overflow-auto cursor-grab active:cursor-grabbing"
            onClick={e => e.stopPropagation()}
          >
            <motion.img
              src={imageUrl}
              alt={title}
              style={{ scale: zoom }}
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              referrerPolicy="no-referrer"
              drag
              dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
            />
          </motion.div>

          {/* Title Footer */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-soft-white font-bold text-lg">{title}</h3>
            <p className="text-gray-500 text-sm">Use mouse wheel to zoom or drag to move</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
