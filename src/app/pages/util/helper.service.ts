/**
 * Created by Adrian on 9/10/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {MAPPING} from './mapping';
import * as jQuery from 'jquery';


@Injectable()
export class Helper {
  constructor(private http: Http) {

  }


  getUserByTwitterId(id) {
    return MAPPING.find((user) => user['id'] === id);
  }

  getUserByPersonId(id) {
    return MAPPING.find((user) => user['personId'] === id);
  }

  getIdsForParty(party) {
    return MAPPING.filter((p) => p.party === party).map((element) => element['personId']);
  }

  getIndexForPersonId(id: any) {
    return MAPPING.findIndex((obj) => obj['personId'] === id);
  }

  extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    return res.json();
  }

  handleError(error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  initTwitterWidget() {

    (<any>window).twttr = (function (d, s, id) {
      let js: any, fjs = d.getElementsByTagName(s)[0];
      const t = (<any>window).twttr || {};
      if (d.getElementById(id)) {
        d.getElementById(id).remove();
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://platform.twitter.com/widgets.js';
      fjs = d.getElementsByTagName(s)[0];
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f: any) {
        t._e.push(f);
      };

      return t;
    }(document, 'script', 'twitter-wjs'));

    if ((<any>window).twttr.ready()) {
      (<any>window).twttr.widgets.load();
    }
  }

  public reInitTwitterWidget(url) {
    this.destroyWidget();
    jQuery('.feed').append('<a class="twitter-timeline" href="' + url + '"></a>');
    this.initTwitterWidget();
  }

  private destroyWidget = function () {
    jQuery('[class^=twitter-timeline]').remove();
  };

}
