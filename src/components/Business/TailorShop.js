import React from 'react'
import T1 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/tailor1.jpg'
import T2 from '/home/jim/my personals as a beginer/luanda react/luanda-kotieno/src/components/images/tailor3.jpg'

function TailorShop() {
  return (
    <div>
        <h1>TailorShop</h1>
        <p>If you want a designer clothe of any choice visit one of the tailor shops in Luanda</p>
        <p><img src={T1} alt="tailor" title="" /></p>
        <p><img src={T2} alt="tailor" title="" /></p>
    </div>
  )
}

export default TailorShop