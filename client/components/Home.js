import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { JsonToTable } from 'react-json-to-table';
import { httpGET } from '../utils/httpUtils';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          column1:"Data1",
          column2:"Data1",
          column3:"Data1",
        },
        {
          column1:"Data2",
          column2:"Data2",
          column3:"Data2",
        },
        {
          column1:"Data3",
          column2:"Data3",
          column3:"Data3",
        }
      ],
    }
  }

  componentWillMount () {

  }

  render() {
    return (
      <div className="p-grid p-fluid p-justify-center">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home" />
        </Helmet>
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>Home</h1>
            {
              this.state.data && <JsonToTable json={this.state.data} />
            }
          </div>
        </div>
      </div>
    );
  }
}