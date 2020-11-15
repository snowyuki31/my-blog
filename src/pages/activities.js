import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import Content from "../components/content"

import Portfolio from "../images/Portfolio.png"

export default function Works() {
  return (
    <div style={{color: "white"}}> 
      <Layout title="Activities" />
      <Content>
        <div>
        <h1>Research</h1>
        <hr></hr>
          <p>表面増強ラマン散乱という複雑な現象から得られるデータを、機械学習の力を借りて分析しよう、という研究を行っています。</p>
          <p>特に生体内への応用に関心があり、溶液から得られるノイジーなデータを取り扱っています。</p>
          <p>データを大量に取得するためのマイクロ流体デバイスの設計から、センサの取扱、データ取得、データ分析まで一貫して行っています。</p>
          <p>また、生体の取扱いを目標としているため、ドメイン知識を得るために医学部生物学教室のTAも行っていました。</p>

        <h1>Internships</h1>
        <hr></hr>
        <h2>Yahoo! Japan Research</h2>
        <p>ユーザ興味推定モデルの性能改善を機械学習でどのよう実現するか？という研究を行っています。</p>
        <p>実証実験を行って得られたデータやYahoo!のもつ豊富なユーザデータを分析することで新規性のあるモデルを構築・提案しています。</p>
        <p>現在、WSDMにdemonstration paperを提出中。21年2月にfull paperを執筆予定。</p>
        <p>他、社内技術発表会で発表、テックブログ執筆など。</p>
        <a href="https://techblog.yahoo.co.jp/entry/2020091530016630/" style={{color: "white"}}>Yahoo! Japan Tech Blog</a>
        
          
        <h2>Toyota Research Institute - Advanced Development, Inc. (TRI-AD)</h2> 
          <p>最新の物体検出の論文を現在開発中のソフトウェアへ実装しています。</p>
          <p>チーム開発に部分的に参加、英語での業務を行っています。</p>

        <h1>Others</h1>
        <hr></hr>
        他の活動としては以下のようなものがあります
        <li>当ブログ兼ポートフォリオサイト Gatsby, AWS Amplifyで作成</li>
        <li>研究室内slack用のツール作成 <a href="https://qiita.com/snowyuki31/items/5c46b7870f2ae6958973" style={{color: "white"}}>Qiita</a></li>
        <li>競技プログラミング <a href="https://atcoder.jp/users/hirono999" style={{color: "white"}}>AtCoder</a></li>
        <li>スマホアプリのUX Designerインターンシップ, リーンスタートアップベースのUXデザイン業務で、実際にユーザにインタビューなどを通して新しい機能の提案まで行いました</li>
        <li>Cookpad Summer Internship 2020参加, Ruby on RailsでCookpadのサービス開発のフローを体験</li>
      </div>

      </Content> 
    </div>
  )
}
