1. 시,도 별 읍면동데이터를 받는다.([http://data.nsdi.go.kr/dataset/15145](http://data.nsdi.go.kr/dataset/15145))
2. [https://mapshaper.org/](https://mapshaper.org/)  업로드 후 encoding=euc-kr쓰고 import 후 console에서 -simplify 5%, -proj wgs84 적용 후 export encoding=utf-8
3. qgic에서 추출된 zip파일 불러온후 읍면동별 코드로 속성테이블 필터링후 객체 선택
4. 객체 선택 후 다른이름으로저장
