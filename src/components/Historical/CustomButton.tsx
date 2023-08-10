import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton: React.FC<{ isLoading?: boolean, myColor: any } & ButtonProps> = ({ ...props }) => {

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(props.myColor.color),
    backgroundColor: props.myColor.color,
    border: 'none !important',
    outline: 'none !important',
    '&:hover': {
      backgroundColor: props.myColor.hover,
    },
  }));
  const LoadingWrapper = styled('span')({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  const LoadingProgress = styled(CircularProgress)({
    position: 'absolute',
  });
  
  if (props.isLoading) {
    return (
      <ColorButton {...props} >
        <LoadingWrapper>
          <span>{props.children}</span>
          <LoadingProgress size={24} />
        </LoadingWrapper>
      </ColorButton>
    );
  }

  return <ColorButton {...props} >{props.value}</ColorButton>;
};

export default CustomButton;