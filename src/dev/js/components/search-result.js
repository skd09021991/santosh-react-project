import React, {Component} from 'react';

 export default class SearchResultsPage extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderMedia(media){
   
    switch(media.type) {
      case 'photo':
        return <div><img src={media.media_url} alt="" /></div>
      case 'video':
        return <video width="320" height="240" controls>
                <source src={media.video_info.variants[0].url} type={media.video_info.variants[0].content_type}/>
                </video> 
      default:
        return null
    }
  }

  render() {
    const { searchResults } = this.props;
    console.log('lll', searchResults);
    return <div>
      {
      searchResults ? searchResults.map(tweet => {
        console.log('hhhh')
        return <div style={{ border: '1px solid blue', padding: '12px', margin: '12px'}}>
          {tweet.entities && tweet.entities.media && <div>
        {
          tweet.entities.media.map(media => {
            return <div>
              {this.renderMedia(media)}
            </div>
          })
        }
      </div>}
      <div>{tweet.text}</div>
        </div> 
      }) : 
      <div></div>}
      
    </div>
  }
 }
