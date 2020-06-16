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
  continue = e => {
    e.preventDefault();
    this.props.redLogin();
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
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile;
      })
    })
  };

  processUpload = (uploadedFile) => {
    const cookies = new Cookies();
    const data = new FormData();

    const id_empresa = cookies.get('id');

    data.append("file", uploadedFile.file, uploadedFile.name, uploadedFile.key);
    api.post(`/empresaLogo/${id_empresa}`, data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));

        this.updateFile(uploadedFile.id, {
          progress
        })
      }
    }).then(response => {
      this.updateFile(uploadedFile.id, {
        uploaded: true,
        id: response.data._id,
        url: response.data.url
      })
    })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true
        });
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
          <button onClick={this.continue} id="next" disabled={loading2}> {loading2 && <i className="fa fa-refresh fa-spin" style={{ paddingRight: "5px", fontSize:16 }}/>}<span id="prox">Próximo</span></button>
        </form>
      </div>
    );
  }
}

export default Step6;