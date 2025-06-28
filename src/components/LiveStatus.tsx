import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

interface LiveStatusProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  compact?: boolean;
}

const LiveStatus: React.FC<LiveStatusProps> = ({ 
  className = '', 
  showText = true, 
  size = 'md',
  compact = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);
      
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTimeInMinutes = hours * 60 + minutes;
      
      let openTime, closeTime;
      
      if (day >= 1 && day <= 5) {
        openTime = 7 * 60;
        closeTime = 22 * 60;
      } else {
        openTime = 8 * 60;
        closeTime = 23 * 60;
      }
      
      setIsOpen(currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const getNextOpenTime = () => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;
    
    if (isOpen) {
      let closeTime;
      if (day >= 1 && day <= 5) {
        closeTime = 22 * 60;
      } else {
        closeTime = 23 * 60;
      }
      
      const remainingMinutes = closeTime - currentTimeInMinutes;
      const remainingHours = Math.floor(remainingMinutes / 60);
      const remainingMins = remainingMinutes % 60;
      
      if (compact) {
        return `${remainingHours}h ${remainingMins}m left`;
      }
      return `Closes in ${remainingHours}h ${remainingMins}m`;
    }
    
    let nextOpenDay = day;
    let nextOpenTime;
    
    if (day >= 1 && day <= 5) {
      nextOpenTime = 7 * 60;
    } else {
      nextOpenTime = 8 * 60;
    }
    
    let todayCloseTime;
    if (day >= 1 && day <= 5) {
      todayCloseTime = 22 * 60;
    } else {
      todayCloseTime = 23 * 60;
    }
    
    if (currentTimeInMinutes >= todayCloseTime) {
      nextOpenDay = (day + 1) % 7;
      if (nextOpenDay >= 1 && nextOpenDay <= 5) {
        nextOpenTime = 7 * 60;
      } else {
        nextOpenTime = 8 * 60;
      }
    }
    
    if (nextOpenDay === day) {
      const minutesUntilOpen = nextOpenTime - currentTimeInMinutes;
      const hoursUntilOpen = Math.floor(minutesUntilOpen / 60);
      const minsUntilOpen = minutesUntilOpen % 60;
      
      if (compact) {
        return `${hoursUntilOpen}h ${minsUntilOpen}m`;
      }
      return `Opens in ${hoursUntilOpen}h ${minsUntilOpen}m`;
    } else {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const openHour = nextOpenTime / 60;
      
      if (compact) {
        return `${days[nextOpenDay]} ${openHour}AM`;
      }
      return `Opens ${days[nextOpenDay]} at ${openHour}:00 AM`;
    }
  };

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  if (compact) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {isOpen ? (
          <>
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft"></div>
              <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            </div>
            {showText && (
              <div className={`${sizeClasses[size]}`}>
                <span className="text-green-600 font-semibold">Open Now</span>
                <span className="text-green-500 ml-2">• {getNextOpenTime()}</span>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            {showText && (
              <div className={`${sizeClasses[size]}`}>
                <span className="text-red-600 font-semibold">Closed</span>
                <span className="text-red-500 ml-2">• {getNextOpenTime()}</span>
              </div>
            )}
          </>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {isOpen ? (
        <>
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-soft shadow-glow"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          </div>
          {showText && (
            <div className={`${sizeClasses[size]}`}>
              <div className="text-green-600 font-semibold">Open Now</div>
              <div className="text-green-500">{getNextOpenTime()}</div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="w-3 h-3 bg-red-500 rounded-full shadow-glow"></div>
          {showText && (
            <div className={`${sizeClasses[size]}`}>
              <div className="text-red-600 font-semibold">Closed</div>
              <div className="text-red-500">{getNextOpenTime()}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LiveStatus;