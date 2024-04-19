import { Link } from 'react-router-dom';

const CloseButton = () => {
  return (
    <div>
      {/* Use the Link component to navigate to another page */}
      <Link to="/productlisting">
        <button className='ui btn'>Back</button>
      </Link>
    </div>
  );
};

export default CloseButton;
