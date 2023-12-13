import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton: React.FC<{ isloading?: string | undefined; mycolor: { color: string; hover: string } } & ButtonProps> = ({
  ...props
}) => {
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(props.mycolor.color),
    backgroundColor: props.mycolor.color,
    border: 'none !important',
    outline: 'none !important',
    '&:hover': {
      backgroundColor: props.mycolor.hover,
    },
  }));
  const LoadingWrapper = styled('span')({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const LoadingProgress = styled(CircularProgress)({
    position: 'absolute',
  });

  return (
    <ColorButton {...props}>
      {props.isloading ? (
        <LoadingWrapper>
          <span>{props.children}</span>
          <LoadingProgress size={24} />
        </LoadingWrapper>
      ) : (
        props.value
      )}
    </ColorButton>
  );
};

export default CustomButton;
