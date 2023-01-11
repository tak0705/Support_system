import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-chino',
  templateUrl: './chino.component.html',
  styleUrls: ['./chino.component.scss']
})
export class ChinoComponent implements OnInit {
    
  form = this.fb.group({file: ['', [Validators.required]]});
  file: File | null = null;
  input = "";
  arr = [""];
  str = "";
  lineArr = [""];

  cnt_edu = 0;
  cnt_edu_jin = 0;
  cnt_edu_sya = 0;
  cnt_edu_sou = 0;
  cnt_edu_gai = 0;
  cnt_edu_hoken = 0;
  cnt_edu_jyou = 0;

  cnt_spe = 0;
  cnt_spe_kyouki_hi=0;
  cnt_spe_courseki_hi=0;
  cnt_spe_kyo_co_hi=0;//共基＋コース基の必修
  cnt_spe_senhi_group1=0;//数学系
  cnt_spe_senhi_group2=0;//英語系
  cnt_spe_senhi_group3=0;//データサイエンス、プログラミング系
  cnt_spe_senhi=0;
  cnt_spe_courseki_sen=0;
  cnt_spe_coursesen_hi=0;
  cnt_spe_coursesen_sen=0;
  cnt_spe_kyou_sen=0;
  cnt_fre = 0;
  cnt_chiki =0;

  constructor(private fb: FormBuilder) {
  }

  get f() {
      return this.form.controls;
  }

  ngOnInit() {
  }

  onFileChange(event: any) {
      if (event.target.files.length > 0) {
          this.file = event.target.files[0];
      }
  }

  submit() {
      this.readAsText(this.file!).then(result => this.input = result);
  }

  private readAsText(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {

              this.str = reader.result as string;
              this.lineArr = this.str.split("\n");
              //this.arr = this.str.split(",");
              //this.cnt += ( this.lineArr[5].match( /人文/g ) && this.lineArr[5].match( /あ/g ) || []).length;

              for (let i=5;i<=this.str.length;i++) {
              this.cnt_edu_jin += 2*(( this.lineArr[i].match( /教養教育科目/ ) && this.lineArr[i].match( /人文科学系/ ) && this.lineArr[i].match( /合/ ) || []).length);
              this.cnt_edu_sya += 2*(( this.lineArr[i].match( /教養教育科目/ ) && this.lineArr[i].match( /社会科学系/ ) && this.lineArr[i].match( /合/ ) || []).length);
              this.cnt_edu_sou += 2*(( this.lineArr[i].match( /教養教育科目/ ) && this.lineArr[i].match( /総合科目系/ ) && this.lineArr[i].match( /合/ ) || []).length);
              this.cnt_edu_gai += (( this.lineArr[i].match( /教養教育科目/ ) && this.lineArr[i].match( /外国語系/ ) && this.lineArr[i].match( /合/ ) || []).length);
              this.cnt_edu_hoken += (( this.lineArr[i].match( /教養教育科目/ ) && this.lineArr[i].match( /保健体育系/ ) && this.lineArr[i].match( /合/ ) || []).length);
              this.cnt_edu_jyou += 2*(( this.lineArr[i].match( /教養教育科目/ ) && this.lineArr[i].match( /情報処理系/ ) && this.lineArr[i].match( /合/ ) || []).length);
              this.cnt_edu = this.cnt_edu_jin + this.cnt_edu_sya + this.cnt_edu_sou + this.cnt_edu_gai + this.cnt_edu_hoken + this.cnt_edu_jyou;

              this.cnt_spe += 2*(( this.lineArr[i].match( /専門教育科目/ ) && this.lineArr[i].match( /合/ ) || []).length);
              this.cnt_spe -= ( this.lineArr[i].match( /共通専門科目/ ) && this.lineArr[i].match( /合/ ) || []).length;
              this.cnt_spe -= ( this.lineArr[i].match( /知的財産/ ) && this.lineArr[i].match( /合/ ) || []).length;
              this.cnt_spe -= ( this.lineArr[i].match( /工学倫理/ ) && this.lineArr[i].match( /合/ ) || []).length;

              this.cnt_fre += 2*(( this.lineArr[i].match( /自由選択科目/ ) && this.lineArr[i].match( /合/ ) || []).length);
              this.cnt_chiki += 2*((( this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /言語と文化/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /地域ライフプラン/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /日本の歴史と社会/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /富山のものづくり概論/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /富山の地域づくり/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /環日本海/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /現代社会論/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /地球と環境/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /地域の経済と社会・文化/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /環境/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /人権と福祉/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /医療と地域社会/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /ビジネス思考/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /産業観光学/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /人間と福祉/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /日本海学/ ))
              || (this.lineArr[i].match( /教養教育科目/ ) &&this.lineArr[i].match( /アカデミック・デザイン/ ))
              && this.lineArr[i].match( /合/ ) || []).length);
              }
              
              resolve(reader.result as string);
          };
          reader.onerror = () => {
              reject(reader.error);
          };
          reader.readAsText(file, 'shift-jis'); // デフォルトのEncodeはUTF-8
      });
  }
}
