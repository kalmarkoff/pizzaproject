import { Component,OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

interface Post {
  title: string;
  content: string;
  day:any;
}
interface Postid extends Post {
  
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  postsCol: AngularFirestoreCollection<Post>;
  posts : Observable<Post[]>;
  title:string;
  content:string;
  day:number;

  constructor(private afs: AngularFirestore) { }



  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }

  addPost(){
    
    //this.afs.collection('posts').add({'title':this.title, 'content':this.content})
    this.afs.collection('posts').add({'title':this.title, 'content':this.content})
  }

}
