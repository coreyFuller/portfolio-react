import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  CardActionArea,
} from "@mui/material";

const ImageGrid = (props) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      {props.data.map((d) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea href={d.source !== undefined || d.source !== null ? d.source : null}
            target="_blank"
            >
              <CardMedia component="img" height="200" image={d.path} />
              <CardContent>
                <Typography gutterBottom variant="h6" align="center">
                  {d.name}
                </Typography>
                <Typography variant="subtitle2" align='center' color="text.primary">
                  {d.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Stack>
  );
};

export default ImageGrid;
