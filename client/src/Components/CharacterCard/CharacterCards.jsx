import React from 'react';
import styles from './CharacterCard.module.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.selectChar = this.selectChar.bind(this);
    this.id = props.props.id;
    this.name = props.props.name;
    this.status = props.props.status;
    this.species = props.props.species;
    this.type = props.props.type;
    this.gender = props.props.gender;
    this.origin = props.props.origin.name;
    this.image = props.props.image;
    this.episode = props.props.episode;
    this.selectCharacterHandler = props.selectCharacterHandler
  }

  selectChar() {
    console.log(this);
    this.selectCharacterHandler(this.name);
    /*
    Thanks to the binding in the constructor function,
    the 'this' keyword now refers to the component object
    */
  }
  render() {
    return (
      <div key={this.id}>
        <div className={styles.cardContainer} onClick={this.selectChar}>
          <div className={styles.card}>
            <header className={styles.articleHeader}>
              <h2 className={styles.articleTitle}>{this.name}</h2>
            </header>

            <div className={styles.imageLayout}>
              <div className={styles.image}>
                <img src={this.image} alt={this.name} width="150" height="150" />
              </div>
            </div>
            <div className={styles.stats}>
              <div className={styles.name}>Gender: {this.gender}</div>
              <div className={styles.name}>Status: {this.status}</div>
              <div className={styles.name}>Species: {this.species}</div>
              {this.type ? (
                <div className={styles.name}>Type: {this.type}</div>
              ) : (
                <div className={styles.name}>Type: N/A</div>
              )}
            </div>
            <div className={styles.name}>Origin: {this.origin}</div>

            <div className={styles.tags}>
              <div>
                <h3>Total Episodes: {this.episode.length}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    
  }
}
