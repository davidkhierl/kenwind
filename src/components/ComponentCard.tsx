import { faBug, faLink } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { useMediaQuery } from 'react-responsive';

interface ComponentCardProps {
  title?: string;
  refLink?: string;
  issueLink?: string;
}

const ComponentCard: React.FC<ComponentCardProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  issueLink,
  refLink,
  title,
  ...props
}) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const [isLinkVisible, setIsLinkVisible] = React.useState(isMobile);

  React.useEffect(() => {
    setIsLinkVisible(isMobile);
  }, [isMobile]);

  return (
    <div
      className='flex flex-col'
      onMouseEnter={() => setIsLinkVisible(isMobile || true)}
      onMouseLeave={() => setIsLinkVisible(isMobile || false)}>
      <div className='flex flex-col items-start h-4 mb-3 text-gray-500 md:flex-row md:items-center'>
        {title && (
          <h1 className={`flex-shrink-0 text-lg font-bold${refLink ? ' mr-2' : ''}`}>{title}</h1>
        )}
        {!isMobile && isLinkVisible && (
          <div className='flex justify-between w-full'>
            {refLink && (
              <Tooltip anchorElement='target' position={isMobile ? 'auto' : 'right'}>
                <a
                  href={refLink}
                  target='_blank'
                  rel='noreferrer'
                  className='text-xs hover:underline'
                  title='Visit documentation'>
                  Kendo docs <FontAwesomeIcon icon={faLink} />
                </a>
              </Tooltip>
            )}
            {issueLink && (
              <Tooltip anchorElement='target' position='auto'>
                <a
                  href={issueLink}
                  target='_blank'
                  rel='noreferrer'
                  className='text-xs leading-none hover:underline'
                  title='Report issue in github'>
                  Report an issue <FontAwesomeIcon icon={faBug} />
                </a>
              </Tooltip>
            )}
          </div>
        )}
      </div>
      <div
        {...props}
        className={`bg-white p-6 shadow-md rounded-md${className ? ` ${className}` : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ComponentCard;
