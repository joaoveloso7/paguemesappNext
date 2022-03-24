import { FolderSpecialOutlined } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

export default function CardContentRecent(props) {

  const cardsRecent = [
    {title: 'Takenoko', status: false},
    {title: 'Hamburguer', status: false},
    {title: 'Azul', status: true},
  ]

  return (
    <>
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            {props.cardTitle}
        </Typography>
        <List>
     
        {cardsRecent.map(card => {
          return(
              <ListItem key={card.title} sx={{color: card.status ?  'success.main' : 'error.main'}}>
                   <ListItemIcon>
                     <FolderSpecialOutlined sx={{color: card.status ?  'success.main' : 'error.main'}} />
                   </ListItemIcon>
                   <ListItemText
                     primary={card.title}
                   />
               </ListItem>
          )
        })}       


               
        </List>
    </>
  )
}
