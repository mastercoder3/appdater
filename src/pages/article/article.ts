import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  article;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.article = this.navParams.get('article')
  }

  ionViewDidLoad() {

    console.log(this.article);
  }

}
