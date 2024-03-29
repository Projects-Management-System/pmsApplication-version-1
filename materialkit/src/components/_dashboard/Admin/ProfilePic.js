import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, Button, Container, Stack } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const Input = styled('input')({
  display: 'none'
});

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 360 }}>
      <Stack direction="column" alignItems="center" justifyContent="space-between" mb={2}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={6} />
        <Avatar
          alt="Remy Sharp"
          sx={{
            width: 220,
            height: 220,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          src="https://thumbs.dreamstime.com/b/avatar-line-icon-black-background-flat-style-vector-illustration-168419958.jpg"
        />
      </Stack>
      <Stack direction="column" alignItems="center" spacing={2}>
        <Stack direction="row" alignItems="center" spacing={0.2}>
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          <Button fullWidth size="small" type="submit" variant="outlined">
            upload
          </Button>
        </Stack>
      </Stack>
      <CardContent>
        <Stack direction="column" alignItems="center" justifyContent="space-between" mb={2.7}>
          <Typography variant="body2" color="text.secondary">
            Upload image of the user.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
