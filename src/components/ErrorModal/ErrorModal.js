import Button from '../UI/Button';
import './ErrorModal.css';
import { useSelector } from 'react-redux';
 

function ErrorModal(props) {
  const error = useSelector(state => state.error.message);
 
  return (
    <>
      <div className='error glass'>
        {error}
      </div>
      <Button type='button' onClick={props.onClick}  text={'Go Back'} />
    </>
  );
}

export default ErrorModal;
