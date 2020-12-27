import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { StyledBookWrapper, StyledBookTitle, StyledBookAuthor, 
        StyledBookImage, StyledBookMesseage, StyledCommonButton } from '../components/Styled';


export default function BookItem({ title, author, message, url }) {
  const bookImgUrl = url.split('Goods')[1];
  return (
        <StyledBookWrapper>
          <StyledBookTitle>{title}</StyledBookTitle>
          <StyledBookAuthor>{author}</StyledBookAuthor>
          <a href={url} target="_BLANK" rel="noopener noreferrer">
            <StyledBookImage src={`http://image.yes24.com/goods/${bookImgUrl}/800x0`} alt="#" />
          </a>
          <StyledBookMesseage>{message}</StyledBookMesseage>
          <StyledCommonButton>
            <EditOutlined style={{color: '#000', fontSize: '20px'}} />
          </StyledCommonButton>
          <StyledCommonButton>
            <DeleteOutlined style={{color: '#000', fontSize: '20px'}} />  
          </StyledCommonButton>
        </StyledBookWrapper>
  );
}