import React, { Component } from 'react';
import BoxMaps from '../PesquisaMaps/index';
import Upload from '../uploadImagem/index';
import FileList from '../FileList/index';
import filesize from 'filesize';

var data;
class Step3 extends Component {
    continue = e => {
        e.preventDefault();
       
        this.props.nextStep();
    }

    state = {
        uploadedFiles: [],
    }

    handleUpload = files => {
        const uploadedFiles = files.map(file => ({
            file,
            id: file.name,
            name: file.name,
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

        data = {uploadedFiles};
        console.log(data);
        uploadedFiles.forEach(this.processUpload);

    };

    processUpload = (uploadedFile) => {
        const data = new FormData();

        data.append('file', uploadedFile.file, uploadedFile.name);
         
    
    }


    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { uploadedFiles } = this.state;
        const { cidade, uf, handleChange, onGetLatLng, complemento  } = this.props;
        return (
            <div className="form">
                <strong>Endereço da Empresa</strong>
                <form action="submit" onSubmit={this.continue}>
                    <div className="input-group">
                        <label htmlFor="cidade">Cidade</label>
                        <input
                            type="text"
                            name="cidade"
                            value={cidade}
                            onChange={handleChange('cidade')}
                            required
                        />

                        <label htmlFor="uf" id="input-lado">UF</label>
                        <input
                            type="text"
                            name="uf"
                            value={uf}
                            onChange={handleChange('uf')}
                            required
                            style={{ width: 58 }}
                        />
                    </div>
                    <label>Endereço</label>
                    <BoxMaps onGetLatLng={onGetLatLng} ></BoxMaps>
                    <label htmlFor="complemento" id="input-lado">UF</label>
                    <input
                            type="text"
                            name="complemento"
                            value={complemento}
                            onChange={handleChange('complemento')}
                            required
                            style={{ width: 58 }}
                        />
                    <div className="button-group">
                        <button id="prev" onClick={this.back}>voltar</button>
                        <button type="submit" id="next">próximo</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Step3;

/*
    <Upload onUpload={this.handleUpload} />
    {!!uploadedFiles.length && (<FileList files={uploadedFiles} onDelete={this.handleDelete} />)}
*/