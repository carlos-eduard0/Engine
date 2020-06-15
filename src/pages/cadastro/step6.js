import React, { Component } from 'react';
import filesize from 'filesize';
import Cookies from 'universal-cookie';

import api from '../../services/api';
import FileList from '../FileList';
import Upload from '../uploadImagem';
import './form.css'
class Step6 extends Component {

    state = {
        uploadedFiles: [],
    }

    handleUpload = files => {
      console.log(files)
        const uploadedFiles = files.map(file => ({
            file,
            id: file.name,
            name: file.name,
            key: file.key,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null,
        }))
        this.setState({
            uploadedFiles
        });

        uploadedFiles.forEach(this.processUpload);

    };

    updateFile = (id, data) => {
      this.setState({ uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id ? {...uploadedFile, ...data} : uploadedFile;
      }) })
    };

    processUpload = (uploadedFile) => {
        const cookies = new Cookies();
        const data = new FormData();

        const id_empresa = localStorage.get('id');

        data.append("file", uploadedFile.file, uploadedFile.name, uploadedFile.key );
        api.post('/empresaLogo', data,
        {
          headers: {
            authorization: id_empresa,
          }
        } ,{
            onUploadProgress: e => {
              const progress = parseInt(Math.round((e.loaded * 100) / e.total));
    
              this.updateFile(uploadedFile.id, {
                progress
              })
            }
          }).then(response => {
            this.updateFile(uploadedFile.id, {
              uploaded:true,
              id: response.data._id,
              url: response.data.url
            })
          })
          .catch(() => {
            this.updateFile(uploadedFile.id, {
              error:true
            });
          });
    };  

    

    render() {
        const { uploadedFiles } = this.state;

        return (
            <div> 
                <h1>olá</h1>
                <Upload onUpload={this.handleUpload} />
                {!!uploadedFiles.length && (<FileList files={uploadedFiles} onDelete={this.handleDelete} />)}
            </div>
        );
    }
}

export default Step6;