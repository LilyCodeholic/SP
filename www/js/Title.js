const funcPageTitle = () =>
{
    SPDB.Title =
    {
        Status:`
            ステータス<br>
            　プレイ　: 称号、条件共に埋まっていません<br>
            　バトル　: 称号、条件共に埋まっていません<br>
            　アズワン: 称号、条件共に埋まっていません<br>
            <br>
            称号と取得条件をアプリの通りに記載しています。`,
        Play:
        [
            {
                "title":"新米パイロット",
                "flag":"初期所持称号"
            },
            {
                "title":"初心者アズワン",
                "flag":"シングルスター>に初めて到達"
            },
            {
                "title":"見習いアズワン",
                "flag":"シングルスター>>に初めて到達"
            },
            {
                "title":"新米アズワン",
                "flag":"シングルスター>>>に初めて到達"
            },
            {
                "title":"新参アズワン",
                "flag":"ダブルスター>に初めて到達"
            },
            {
                "title":"新星アズワン",
                "flag":"ダブルスター>>に初めて到達"
            },
            {
                "title":"下級アズワン",
                "flag":"ダブルスター>>>に初めて到達"
            },
            {
                "title":"噂のアズワン",
                "flag":"トリプルスター>に初めて到達"
            },
            {
                "title":"期待のアズワン",
                "flag":"トリプルスター>>に初めて到達"
            },
            {
                "title":"中級アズワン",
                "flag":"トリプルスター>>>に初めて到達"
            },
            {
                "title":"有名アズワン",
                "flag":"フォースター>に初めて到達"
            },
            {
                "title":"真のアズワン",
                "flag":"フォースター>>に初めて到達"
            },
            {
                "title":"上級アズワン",
                "flag":"フォースター>>>に初めて到達"
            },
            {
                "title":"達人アズワン",
                "flag":"ファイブスター>に初めて到達"
            },
            {
                "title":"ベテランアズワン",
                "flag":"ファイブスター>>に初めて到達"
            },
            {
                "title":"超級アズワン",
                "flag":"ファイブスター>>>に初めて到達"
            },
            {
                "title":"熟練のアズワン",
                "flag":"ノヴァ>に初めて到達"
            },
            {
                "title":"究極のアズワン",
                "flag":"ノヴァ>>に初めて到達"
            },
            {
                "title":"超新星誕生",
                "flag":"ノヴァ>>>に初めて到達"
            },
            {
                "title":"ギャラクシーロード",
                "flag":"スーパーノヴァ>に初めて到達"
            },
            {
                "title":"宇宙の果てへ進む者",
                "flag":"スーパーノヴァ>>に初めて到達"
            },
            {
                "title":"星座を束ねる王者",
                "flag":"スーパーノヴァ>>>に初めて到達"
            },
            {
                "title":"百戦錬磨",
                "flag":"全国対戦100回プレイ"
            },
            {
                "title":"？？？",
                "flag":"全国対戦？？？回プレイ"
            },
            {
                "title":"神頼み",
                "flag":"願掛け10回成功"
            },
            {
                "title":"交通安全",
                "flag":"願掛け50回成功"
            },
            {
                "title":"願い星",
                "flag":"願掛け100回成功"
            },
            {
                "title":"無敗のお守り",
                "flag":"願掛け500回成功"
            },
            {
                "title":"大願成就",
                "flag":"願掛け1000回成功"
            },
            {
                "title":"？？？",
                "flag":"願掛け？？？回成功"
            },
            {
                "title":"期待のパイロット",
                "flag":"累計25日ログイン"
            },
            {
                "title":"エースパイロット",
                "flag":"累計50日ログイン"
            },
            {
                "title":"？？？",
                "flag":"累計？？？日ログイン"
            },
            {
                "title":"四つ星プレイヤー",
                "flag":"連続4日ログイン"
            },
            {
                "title":"空に輝く五つ星",
                "flag":"連続5日ログイン"
            },
            {
                "title":"ミルクディッパー",
                "flag":"連続6日ログイン"
            },
            {
                "title":"北斗七星の煌めき",
                "flag":"連続7日ログイン"
            },
            {
                "title":"？？？",
                "flag":"連続？？？日ログイン"
            },
            {
                "title":"パーツコレクター",
                "flag":"メカパーツ30個獲得"
            },
            {
                "title":"パーツマニア",
                "flag":"メカパーツ40個獲得"
            },
            {
                "title":"全機出撃",
                "flag":"メカパーツ50個獲得"
            },
            {
                "title":"？？？",
                "flag":"メカパーツ？？？個獲得"
            },
            {
                "title":"ウェポンコレクター",
                "flag":"武器25個獲得"
            },
            {
                "title":"ウェポンマニア",
                "flag":"武器35個獲得"
            },
            {
                "title":"？？？",
                "flag":"武器？？？個獲得"
            },
            {
                "title":"タイトルコレクター",
                "flag":"称号50個獲得"
            },
            {
                "title":"タイトルマニア",
                "flag":"称号100個獲得"
            },
            {
                "title":"？？？",
                "flag":"称号？？？個獲得"
            },
            {
                "title":"エンブレムコレクター",
                "flag":"エンブレムパーツ50個獲得"
            },
            {
                "title":"ラインコレクター",
                "flag":"？？？"
            },
            {
                "title":"クロックスター",
                "flag":"全国対戦50時間プレイ"
            }
        ],
        Battle:
        [
            {
                "title":"闘いの鼓舞",
                "flag":"全国対戦5回勝利"
            },
            {
                "title":"十字架を背負う死神",
                "flag":"全国対戦10回勝利"
            },
            {
                "title":"百の星を砕く猛者",
                "flag":"全国対戦100回勝利"
            },
            {
                "title":"？？？",
                "flag":"全国対戦？回勝利"
            },
            {
                "title":"スコアゲッター",
                "flag":"累計リザルトスコア100000達成"
            },
            {
                "title":"最高にハイスコア",
                "flag":"累計リザルトスコア500000達成"
            },
            {
                "title":"オールラウンダー",
                "flag":"累計リザルトスコア1000000達成"
            },
            {
                "title":"全知全能の神星",
                "flag":"累計リザルトスコア5000000達成"
            },
            {
                "title":"？？？",
                "flag":"累計リザルトスコア？？？達成"
            },
            {
                "title":"バーサーカー",
                "flag":"累計アタックスコア20000達成"
            },
            {
                "title":"最強の矛",
                "flag":"累計アタックスコア50000達成"
            },
            {
                "title":"ビッグバン",
                "flag":"累計アタックスコア100000達成"
            },
            {
                "title":"？？？",
                "flag":"累計アタックスコア？？？達成"
            },
            {
                "title":"キャンプ地とする",
                "flag":"累計占拠スコア15000達成"
            },
            {
                "title":"世界征服",
                "flag":"累計占拠スコア30000達成"
            },
            {
                "title":"宇宙を征服する者",
                "flag":"累計占拠スコア75000達成"
            },
            {
                "title":"？？？",
                "flag":"累計占拠スコア？？？達成"
            },
            {
                "title":"お手伝いさん",
                "flag":"累計アシストスコア15000達成"
            },
            {
                "title":"アシスタント",
                "flag":"累計アシストスコア30000達成"
            },
            {
                "title":"影の暗躍者",
                "flag":"累計アシストスコア75000達成"
            },
            {
                "title":"？？？",
                "flag":"累計アシストスコア？？？達成"
            },
            {
                "title":"グッドプレイヤー",
                "flag":"1対戦でナイスプレイ15個達成"
            },
            {
                "title":"ナイスプレイヤー",
                "flag":"1対戦でナイスプレイ25個達成"
            },
            {
                "title":"勝利への近道",
                "flag":"1対戦でナイスプレイ40個達成"
            },
            {
                "title":"？？？",
                "flag":"1対戦でナイスプレイ？？？個達成"
            },
            {
                "title":"キラーマシン",
                "flag":"累計キル数15回達成"
            },
            {
                "title":"ブラックホール注意！",
                "flag":"累計キル数150回達成"
            },
            {
                "title":"殺戮の堕天使",
                "flag":"累計キル数300回達成"
            },
            {
                "title":"？？？",
                "flag":"累計キル数？？？回達成"
            },
            {
                "title":"マグハンター",
                "flag":"マグを累計100機撃破"
            },
            {
                "title":"マグマグハンター",
                "flag":"マグを累計3000機撃破"
            },
            {
                "title":"最強のマグキラー",
                "flag":"マグを累計10000機撃破"
            },
            {
                "title":"？？？",
                "flag":"マグを累計？？？機撃破"
            },
            {
                "title":"Sマグダメ",
                "flag":"Sマグへ累計20000ダメージを与えた"
            },
            {
                "title":"Sマグすげーダメ",
                "flag":"Sマグへ累計300000ダメージを与えた"
            },
            {
                "title":"Sマグ超ダメ",
                "flag":"Sマグへ累計1000000ダメージを与えた"
            },
            {
                "title":"？？？",
                "flag":"Sマグへ累計？？？ダメージを与えた"
            },
            {
                "title":"タワーダメ",
                "flag":"タワーへ累計20000ダメージを与えた"
            },
            {
                "title":"？？？",
                "flag":"タワーへ累計？？？ダメージを与えた"
            },
            {
                "title":"グランデダメ",
                "flag":"グランデへ累計20000ダメージを与えた"
            },
            {
                "title":"？？？",
                "flag":"グランデへ累計？？？ダメージを与えた"
            },
            {
                "title":"コアダメ",
                "flag":"コアへ累計20000ダメージを与えた"
            },
            {
                "title":"コアすげーダメ",
                "flag":"コアへ累計300000ダメージを与えた"
            },
            {
                "title":"コア超ダメ",
                "flag":"コアへ累計1000000ダメージを与えた"
            },
            {
                "title":"？？？",
                "flag":"コアへ累計？？？ダメージを与えた"
            },
            {
                "title":"アサルト使い",
                "flag":"アサルトで累計60分対戦した"
            },
            {
                "title":"ベテランアサルト",
                "flag":"アサルトで累計450分対戦した"
            },
            {
                "title":"？？？",
                "flag":"アサルトで累計？？？分対戦した"
            },
            {
                "title":"ヴァン使い",
                "flag":"ヴァンガードで累計60分対戦した"
            },
            {
                "title":"ベテランヴァン",
                "flag":"ヴァンガードで累計450分対戦した"
            },
            {
                "title":"？？？",
                "flag":"ヴァンガードで累計？？？分対戦した"
            },
            {
                "title":"サポーター",
                "flag":"サポートで累計60分対戦した"
            },
            {
                "title":"ベテランサポート",
                "flag":"サポートで累計450分対戦した"
            },
            {
                "title":"？？？",
                "flag":"サポートで累計？？？分対戦した"
            }
        ],
        AsOne:
        [
            {
                "title":"ヒカリの同僚",
                "flag":"ヒカリとのDePSを500獲得"
            },
            {
                "title":"ヒカリのマブダチ",
                "flag":"ヒカリとのDePSを2500獲得"
            },
            {
                "title":"ヒカリの相棒",
                "flag":"ヒカリとのDePSを4500獲得"
            },
            {
                "title":"ホワイトハート",
                "flag":"ヒカリとのDePSを6500獲得"
            },
            {
                "title":"一番星のコンビ",
                "flag":"ヒカリとのDePSを8500獲得"
            },
            {
                "title":"ヒカリの物語",
                "flag":"クエスト「コミュニケーション」をクリア"
            },
            {
                "title":"ピカピカのお星さま☆",
                "flag":"ヒカリと全国対戦10回勝利"
            },
            {
                "title":"キラキラの流れ星☆",
                "flag":"ヒカリと全国対戦30回勝利"
            },
            {
                "title":"ビッグスター",
                "flag":"ヒカリと全国対戦60回勝利"
            },
            {
                "title":"戦場で輝く一番星",
                "flag":"ヒカリと全国対戦100回勝利"
            },
            {
                "title":"星空を駆け巡る少女",
                "flag":"ヒカリと全国対戦600回勝利"
            },
            {
                "title":"？？？",
                "flag":"ヒカリと全国対戦？？？回勝利"
            },
            {
                "title":"レイカの同僚",
                "flag":"レイカとのDePSを500獲得"
            },
            {
                "title":"レイカのマブダチ",
                "flag":"レイカとのDePSを2500獲得"
            },
            {
                "title":"レイカの相棒",
                "flag":"レイカとのDePSを4500獲得"
            },
            {
                "title":"ブルーハート",
                "flag":"レイカとのDePSを6500獲得"
            },
            {
                "title":"最の高のコンビ",
                "flag":"レイカとのDePSを8500獲得"
            },
            {
                "title":"レイカの物語",
                "flag":"クエスト「コミュニケーション」をクリア"
            },
            {
                "title":"風紀委員長",
                "flag":"レイカと全国対戦10回勝利"
            },
            {
                "title":"クールビューティー",
                "flag":"レイカと全国対戦30回勝利"
            },
            {
                "title":"氷獄の眼差し",
                "flag":"レイカと全国対戦60回勝利"
            },
            {
                "title":"冷徹な戦乙女",
                "flag":"レイカと全国対戦100回勝利"
            },
            {
                "title":"絶対零度の女帝",
                "flag":"レイカと全国対戦600回勝利"
            },
            {
                "title":"？？？",
                "flag":"レイカと全国対戦？？？回勝利"
            },
            {
                "title":"シャーリーの同僚",
                "flag":"シャーリーとのDePSを500獲得"
            },
            {
                "title":"シャーリーのマブダチ",
                "flag":"シャーリーとのDePSを2500獲得"
            },
            {
                "title":"シャーリーの相棒",
                "flag":"シャーリーとのDePSを4500獲得"
            },
            {
                "title":"イエローハート",
                "flag":"シャーリーとのDePSを6500獲得"
            },
            {
                "title":"イケてるコンビ",
                "flag":"シャーリーとのDePSを8500獲得"
            },
            {
                "title":"シャーリーの物語",
                "flag":"クエスト「コミュニケーション」をクリア"
            },
            {
                "title":"わがまま娘",
                "flag":"シャーリーと全国対戦10回勝利"
            },
            {
                "title":"都会っ子倒すガール",
                "flag":"シャーリーと全国対戦30回勝利"
            },
            {
                "title":"リトルビッグ",
                "flag":"シャーリーと全国対戦60回勝利"
            },
            {
                "title":"黄金の魂",
                "flag":"シャーリーと全国対戦100回勝利"
            },
            {
                "title":"超絶最強田舎娘",
                "flag":"シャーリーと全国対戦600回勝利"
            },
            {
                "title":"？？？",
                "flag":"シャーリーと全国対戦？？？回勝利"
            },
            {
                "title":"イサドラの同僚",
                "flag":"イサドラとのDePSを500獲得"
            },
            {
                "title":"イサドラのマブダチ",
                "flag":"イサドラとのDePSを2500獲得"
            },
            {
                "title":"イサドラの相棒",
                "flag":"イサドラとのDePSを4500獲得"
            },
            {
                "title":"グリーンハート",
                "flag":"イサドラとのDePSを6500獲得"
            },
            {
                "title":"ミステリアスなコンビ",
                "flag":"イサドラとのDePSを8500獲得"
            },
            {
                "title":"？？？",
                "flag":"イサドラとのDePSを？？？獲得"
            },
            {
                "title":"イサドラの物語",
                "flag":"クエスト「コミュニケーション」をクリア"
            },
            {
                "title":"大人のレディー",
                "flag":"イサドラと全国対戦10回勝利"
            },
            {
                "title":"頼れる姉御肌",
                "flag":"イサドラと全国対戦30回勝利"
            },
            {
                "title":"ハートスナイパー",
                "flag":"イサドラと全国対戦60回勝利"
            },
            {
                "title":"シークレットスパイ",
                "flag":"イサドラと全国対戦100回勝利"
            },
            {
                "title":"謎深き誘惑の女王",
                "flag":"イサドラと全国対戦600回勝利"
            },
            {
                "title":"？？？",
                "flag":"イサドラと全国対戦？？？回勝利"
            },
            {
                "title":"ナギの同僚",
                "flag":"ナギとのDePSを500獲得"
            },
            {
                "title":"ナギのマブダチ",
                "flag":"ナギとのDePSを2500獲得"
            },
            {
                "title":"ナギの相棒",
                "flag":"ナギとのDePSを4500獲得"
            },
            {
                "title":"レッドハート",
                "flag":"ナギとのDePSを6500獲得"
            },
            {
                "title":"真っ直ぐなコンビ",
                "flag":"ナギとのDePSを8500獲得"
            },
            {
                "title":"ナギの物語",
                "flag":"クエスト「コミュニケーション」をクリア"
            },
            {
                "title":"まっすぐ男子",
                "flag":"ナギと全国対戦10回勝利"
            },
            {
                "title":"バトルコック",
                "flag":"ナギと全国対戦30回勝利"
            },
            {
                "title":"？？？",
                "flag":"ナギと全国対戦60回勝利"
            },
            {
                "title":"ジャスティスレッド",
                "flag":"ナギと全国対戦100回勝利"
            },
            {
                "title":"？？？",
                "flag":"ナギと全国対戦600回勝利"
            },
            {
                "title":"？？？",
                "flag":"ナギと全国対戦？？？回勝利"
            },
            {
                "title":"カズマの同僚",
                "flag":"カズマとのDePSを500獲得"
            },
            {
                "title":"カズマのマブダチ",
                "flag":"カズマとのDePSを2500獲得"
            },
            {
                "title":"カズマの相棒",
                "flag":"カズマとのDePSを4500獲得"
            },
            {
                "title":"グレイハート",
                "flag":"カズマとのDePSを6500獲得"
            },
            {
                "title":"あちーコンビ",
                "flag":"カズマとのDePSを8500獲得"
            },
            {
                "title":"カズマの物語",
                "flag":"クエスト「コミュニケーション」をクリア"
            },
            {
                "title":"はらぺこ漢",
                "flag":"カズマと全国対戦10回勝利"
            },
            {
                "title":"熱血男子",
                "flag":"カズマと全国対戦30回勝利"
            },
            {
                "title":"ハングリー精神",
                "flag":"カズマと全国対戦60回勝利"
            },
            {
                "title":"暴飲暴食",
                "flag":"カズマと全国対戦100回勝利"
            },
            {
                "title":"喰らい尽くす漢",
                "flag":"カズマと全国対戦600回勝利"
            },
            {
                "title":"？？？",
                "flag":"カズマと全国対戦？？？回勝利"
            },
            {
                "title":"シューティングガール",
                "flag":"ヒカリと全国対戦3連続勝利"
            },
            {
                "title":"輝き続ける一番星☆",
                "flag":"ヒカリと全国対戦5連続勝利"
            },
            {
                "title":"闇を刈り取る光の大鎌",
                "flag":"ヒカリと全国対戦10連続勝利"
            },
            {
                "title":"？？？",
                "flag":"ヒカリと全国対戦？？？連続勝利"
            },
            {
                "title":"ツンデレ少女",
                "flag":"レイカと全国対戦3連続勝利"
            },
            {
                "title":"ヴァルキュリア",
                "flag":"レイカと全国対戦5連続勝利"
            },
            {
                "title":"邪悪貫く無敗の神槍",
                "flag":"レイカと全国対戦10連続勝利"
            },
            {
                "title":"？？？",
                "flag":"レイカと全国対戦？？？連続勝利"
            },
            {
                "title":"じゃじゃ馬娘",
                "flag":"シャーリーと全国対戦3連続勝利"
            },
            {
                "title":"ゴールドラッシュ",
                "flag":"シャーリーと全国対戦5連続勝利"
            },
            {
                "title":"暴れ回る黄金の鉄槌",
                "flag":"シャーリーと全国対戦10連続勝利"
            },
            {
                "title":"？？？",
                "flag":"シャーリーと全国対戦？？？連続勝利"
            },
            {
                "title":"セクシークイーン",
                "flag":"イサドラと全国対戦3連続勝利"
            },
            {
                "title":"勝利の女神",
                "flag":"イサドラと全国対戦5連続勝利"
            },
            {
                "title":"深緑に潜む狙撃手",
                "flag":"イサドラと全国対戦10連続勝利"
            },
            {
                "title":"？？？",
                "flag":"イサドラと全国対戦？？？連続勝利"
            },
            {
                "title":"ストレートボーイ",
                "flag":"ナギと全国対戦3連続勝利"
            },
            {
                "title":"終わりなきお茶会",
                "flag":"ナギと全国対戦5連続勝利"
            },
            {
                "title":"悪を断切る正義の双剣",
                "flag":"ナギと全国対戦10連続勝利"
            },
            {
                "title":"？？？",
                "flag":"ナギと全国対戦？？？連続勝利"
            },
            {
                "title":"あちー漢",
                "flag":"カズマと全国対戦3連続勝利"
            },
            {
                "title":"燃え続ける炎",
                "flag":"カズマと全国対戦5連続勝利"
            },
            {
                "title":"全てを切裂く悪食の刃",
                "flag":"カズマと全国対戦10連続勝利"
            },
            {
                "title":"？？？",
                "flag":"カズマと全国対戦？？？連続勝利"
            }
        ],
        Special:
        [
            {
                "title":"Gunslinger",
                "flag":"ガンスリンガー ストラトス3/Σを遊んだことのあるNESiCAで「星と翼のパラドクス」をプレイ"
            },
            {
                "title":"今日は閉店までいます",
                "flag":"'18 12/12-26までにクエスト「全国対戦でチーム内1位を20回獲得」をクリア"
            },
            {
                "title":"愛機 ディスドス",
                "flag":"1/15-4/1までにミッション「ディスドスキャンペーン4」をクリア"
            },
            {
                "title":"甘くはねぇぞ！",
                "flag":"2/1-15までにミッション「バレンタインキャンペーン2(全国対戦でチーム内で20回1位になる)」をクリア"
            },
            {
                "title":"愛機 スクラッパー",
                "flag":"3/6-4/17までにミッション「スクラッパーキャンペーン4(「スクラッパー」パーツをいずれか1つ装備して、ナイスプレイを1000回達成する)」をクリア"
            }
        ]
    };

    const tabTitle = document.getElementById("tabTitle");
    tabTitle.addEventListener("prechange", (event) =>
    {
        textToolbar = `称号 - ${event.tabItem.textContent}`;
        document.querySelector("#pageTitle .center").innerHTML = textToolbar;
    }, false);
    document.querySelector("#pageTitle ons-toolbar-button").onclick = () =>
    {
        document.getElementById("textToast").innerHTML = SPDB.Title.Status;
        toast.toggle();
    };

    const appendData = (tab) =>
    {
        const fragment = document.createDocumentFragment();
        for(const items of SPDB.Title[tab])
        {
            if(items.title == "？？？")
            {
                continue;
            }
            const list_item = document.createElement("ons-list-item");
            list_item.innerHTML = `
                <span class="list-item__title">
                    ${items.title}
                </span>
                <span class="list-item__subtitle">
                    ${items.flag}
                </span>
            `;
            fragment.appendChild(list_item);
        }

        const findElement = (query) =>
        {
            const listTitle = document.getElementById(query);
            if(listTitle != null)
            {
                clearInterval(idSetInterval);
                listTitle.appendChild(fragment);
            }
            else
            {
                console.log(`${query} not found yet...`);
            }
        };
        const idSetInterval = setInterval(findElement, 100, `listTitle_${tab}`);
    };

    appendData("Play");
    appendData("Battle");
    appendData("AsOne");
    appendData("Special");
};
