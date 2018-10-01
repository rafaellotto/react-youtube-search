import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="w-75 d-block mx-auto my-3">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
          </div>
            <input
              className="form-control"
              type="text"
              value={this.state.value}
              onChange={event => this.onInputChange(event.target.value)}
              placeholder="Pesquise vídeos aqui"
              aria-label="Pesquisa"/>
        </div>
      </div>
    );
  }
}

export default SearchBar;
