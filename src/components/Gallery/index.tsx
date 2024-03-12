import Grid from '@mui/material/Grid';
import { ErrorMessage, ImageDescription, ImageName, Item } from './styles';
import { useEffect, useState } from 'react';
import { fetchData } from '../../services/apiService';

interface DataItem {
  id: string;
  name: string;
  img: string;
}

export function Gallery() {
  const [data, setData] = useState<DataItem[]>([]);
  const [brokenImages, setBrokenImages] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const responseData = await fetchData();
      if (responseData) {
        setData(responseData.data);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    data.forEach((item: DataItem) => {
      if (!item.img.includes('youtube.com')) {
        const img = new Image();
        img.src = item.img;
        img.onerror = () => {
          setBrokenImages((prev) => [...prev, item.img]);
        };
      }
    });
  }, [data]);
  
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {data.map((item: DataItem) => (
        <Grid item xs={12} sm={4} md={4} key={item.id}>
          <Item>
            {brokenImages.includes(item.img) ? (
              <ErrorMessage severity="error">Conteúdo não pôde ser carregado.</ErrorMessage>
            ) : (
              <>
                {item.img.endsWith('.jpg') || item.img.endsWith('.jpeg') || item.img.endsWith('.png') ? (
                  <>
                    <ImageName>{item.name}</ImageName>
                    <ImageDescription>{item.name} descrição</ImageDescription>
                    <img src={item.img} alt={item.name} />
                  </>
                ) : item.img.includes('youtube.com/embed/') ? (
                  <iframe width="100%" height="100%" src={`${item.img}?autoplay=0&mute=1`} title={item.name} style={{ position: 'absolute', top: 0, left: 0 }}></iframe>
                ) : (
                  <ErrorMessage severity="error">Conteúdo não pôde ser carregado.</ErrorMessage>
                 
                )}
              </>
            )}
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}
