import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './main';
import { render } from '@testing-library/react';


class Upload extends Component {

    renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive){
      return <UploadMessage>Coloque a imagem de sua empresa aqui.</UploadMessage>
    }

    if(isDragReject){
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>
  }
  render() { 
    const { onUpload } = this.props;
  return (
    <Dropzone accept="image/*" onDropAccepted={onUpload}>
      { ( { getRootProps, getInputProps, isDragActive, isDragReject } ) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />

          {this.renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>  
      ) }
    </Dropzone>
  );
  }
}

export default Upload;