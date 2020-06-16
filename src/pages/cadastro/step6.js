import React, { Component } from 'react';
import filesize from 'filesize';
import {uniqueId} from 'lodash'
import Cookies from 'universal-cookie';

import api from '../../services/api';
import FileList from '../FileList';
import Upload from '../uploadImagem';
import './form.css'
class Step6 extends Component {

  state = {
    uploadedFiles: {},
    data: [],
  }
  handleUpload = files => {
    console.log(files)
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
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
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile;
      })
    })
  };

  Upload = e => {
    e.preventDefault();
    const { data, uploadedFiles } = this.state;
    const cookies = new Cookies();
    const id_empresa = cookies.get('id');
    
    api.post(`/empresaLogo/${id_empresa}`, data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));

        this.updateFile(uploadedFiles[0].id, {
          progress
        })
      }
    }).then(response => {
      this.updateFile(uploadedFiles[0].id, {
        uploaded: true,
        id: response.data._id,
        url: response.data.url
      })
    })
      .catch(() => {
        this.updateFile(uploadedFiles[0].id, {
          error: true
        });
      });
      this.props.redLogin();
  }

  processUpload = (uploadedFile) => {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name, uploadedFile.key);
    this.setState({
      data
    });
  };



  render() {
    const {loading2 } = this.props;
    const { uploadedFiles } = this.state;
    return (
      <div className="form" >
        <strong>Logo da empresa</strong>
        <form>
          <Upload onUpload={this.handleUpload} />
          {!!uploadedFiles.length && (<FileList files={uploadedFiles} onDelete={this.handleDelete} />)}
          <button onClick={this.Upload} id="next" disabled={loading2}> {loading2 && <i className="fa fa-refresh fa-spin" style={{ paddingRight: "5px", fontSize:16 }}/>}<span id="prox">Próximo</span></button>
        </form>
      </div>
    );
  }
}

export default Step6;