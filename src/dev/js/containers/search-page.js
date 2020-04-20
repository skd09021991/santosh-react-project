import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchTwitter, loadMoreTweets} from '../actions/search-page-actions'
import SearchResultsPage from '../components/search-result'
import '../../scss/style.scss';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */



 class Appbar extends Component{
   render(){
     return (<div className="mui-appbar appbar">
               <table width="100%">
               <tbody>
                 <tr >
                   <td className="mui--appbar-height">Twitter Search</td>
                 </tr>
                 </tbody>
               </table>
               </div>)
   }
 }


  class Searchbox extends Component {
    constructor(props) {
        super(props);
       // this.focus = true,
        this.state = {
          value: "",
        };


        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event){

        this.setState({value: event.target.value});
      }
   render() {

     return (
       <div className="searchApp">
       <form style={{textAlign: "center"}}>
         <legend>Enter Keyword for Search</legend>
         <div className="mui-textfield">
           <input type="text" placeholder="Eg. India"  onChange={this.handleChange}/>
         </div>
         <button type="button" className="mui-btn mui-btn--raised" onClick={() => this.props.searchTwitter(this.state.value)} autoFocus={this.focus}>Search</button>
       </form>
     </div>

     );
   }
 }

 class SearchPageRender extends Component {
   render(){
     return(<div>
       <Appbar></Appbar>
       <br/>
       <div className="mui-container-fluid loadMore">
           <div className="mui-row">
             <div className="mui-col-md-2">
             </div>
             <div className="mui-col-md-8">
                 <Searchbox searchTwitter={this.props.searchTwitter}/>
             </div>
             <div className="mui-col-md-2">
            
             </div>
             <br/>
             <div className="mui-col-md-12">
              <SearchResultsPage searchResults={this.props.searchResults}/>
             </div>
             {this.props.searchResults.length > 0 && <button className="buttonLoadMore" onClick={this.props.loadMoreTweets}>
             <i class="fa fa-refresh fa-spin"></i>
               Load More
               
               </button>}
       </div>
       </div>
     </div>)
   }
 }




// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        searchResults: state.SearchResults.filteredResults
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({searchTwitter, loadMoreTweets}, dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(SearchPageRender);
