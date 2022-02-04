import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack
} from "@mui/material";

const ImageGrid = (props) => {
  return (
<Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
      {props.hobbies.map((hobby) => {
        return (
          <Card sx={{ maxWidth: 345,
            border: 1,
            borderRadius: 16,
            boderColor: "black" }}>
            <CardMedia
              component="img"
              image={hobby.path}
              height="100"
              width="100"
            ></CardMedia>
            <CardContent>
              <Typography>{hobby.content}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default ImageGrid;
