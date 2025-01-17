import React from 'react';
import { PhotoSlider } from 'react-photo-view';
import { Button, ImageList, photoImages } from './doc-components';

export default function DocDemo() {
  const [visible, setVisible] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  function handleShowSlider() {
    setVisible(true);
  }
  function handleCloseSlider() {
    setVisible(false);
  }
  return (
    <ImageList>
      <Button onClick={() => setIndex(2)}>setIndex(2)</Button>
      <Button onClick={() => setIndex(4)}>setIndex(4)</Button>
      <Button onClick={handleShowSlider} primary>
        Click
      </Button>

      <PhotoSlider
        images={photoImages.map((item: string) => ({ src: item, key: item }))}
        visible={visible}
        onClose={handleCloseSlider}
        index={index}
        onIndexChange={setIndex}
      />
    </ImageList>
  );
}
