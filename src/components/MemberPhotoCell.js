import { useState, useRef, useEffect } from 'react';

function MemberPhotoCell({ src, video, alt, onMouseEnter, onMouseLeave }) {
  const [showVideo, setShowVideo] = useState(false);
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);

  const handleMouseEnter = (e) => {
    onMouseEnter?.(e);
    if (!video) return;
    timeoutRef.current = setTimeout(() => setShowVideo(true), 1000);
  };

  const handleMouseLeave = (e) => {
    onMouseLeave?.(e);
    clearTimeout(timeoutRef.current);
    setShowVideo(false);
  };

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
      });
    }
  }, [showVideo]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div
      className="member-photo-wrap"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className="member-photo" />

      {video && (
        <video
          ref={videoRef}
          src={video}
          className={`member-video${showVideo ? ' member-video-visible' : ''}`}
          muted
          loop
          playsInline
        />
      )}
    </div>
  );
}

export default MemberPhotoCell;