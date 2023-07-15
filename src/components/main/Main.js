import "./Main.css";
import Chart from "../charts/Chart";
const Main = () => {
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        <h1>مرحبا بكم في مياهنا</h1>
                        <p>مرحبا بك في لوحة التحكم الخاصة بك</p>
                    </div>
                </div>


                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-users fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">عدد السكان</p>
                            <span className="font-bold text-title">12,000,000</span>
                        </div>
                    </div>   

                    <div className="card">
                        <i className="fa fa-tint fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">استهلاك المياه</p>
                            <span className="font-bold text-title"> 1,000,000</span>
                        </div>
                    </div>  
                    <div className="card">
                        <i className="fa fa-balance-scale fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">كمية المياه المحلية</p>
                            <span className="font-bold text-title">200,000</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">طاقة استعاب السدود</p>
                            <span className="font-bold text-title">35%</span>
                        </div>
                    </div>

    
                </div>   

                <div className="charts">
                    <div className="charts__left">
                    <div className="charts__left__title">
                            <div>
                                <h1>الأردن</h1>
                                <p>(المحافضة / الكمية م3)</p>
    
                            </div>
                            
                        </div>
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433868.6382168242!2d35.61797159576475!3d31.835918823585978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2sAmman!5e0!3m2!1sfr!2sjo!4v1689239122877!5m2!1sfr!2sjo" 
                        width="600" 
                        height="450" 
                        style={{border: "0"}}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>توزيع المياه</h1>
                                <p>(المحافضة / الكمية م3)</p>
                                <p>الأردن</p>
                            </div>
                            
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>عمان</h1>
                                <p>200,000</p>
        
                            </div>
                            <div className="card2">
                                <h1>السلط</h1>
                                <p>200,000</p>
                            </div>
                            <div className="card3">
                                <h1>جرش</h1>
                                <p>43553</p>
                            </div>
                            <div className="card4">
                                <h1>الزرقاء</h1>
                                <p>43553</p>
                            </div>
                            <div className="card5">
                                <h1>المفرق</h1>
                                <p>43553</p>
                            </div>
                            <div className="card6">
                                <h1>الرمثا</h1>
                                <p>43553</p>
                            </div>
                        </div>
                        </div>
                        <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>التقارير اليومية</h1>
                                <p>عمان, الأردن, JO</p>
                            </div>
                        </div>
                        <Chart />
                    </div>
                    <div className="charts__right">
    <div className="charts__right__title">
        <div>
            <h1>توزيع المياه</h1>
            <p>(المحافضة / الكمية م3)</p>
            <p>الأردن</p>
        </div>
    </div>

    <div className="charts__left__table">
        <table>
            <tr>
                <th>المحافظة</th>
                <th>الكمية (م3)</th>
            </tr>
            <tr>
                <td>عمان</td>
                <td>200,000</td>
            </tr>
            <tr>
                <td>السلط</td>
                <td>200,000</td>
            </tr>
            <tr>
                <td>جرش</td>
                <td>43,553</td>
            </tr>
            <tr>
                <td>الزرقاء</td>
                <td>43,553</td>
            </tr>
            <tr>
                <td>المفرق</td>
                <td>43,553</td>
            </tr>
        </table>
    </div>
</div>

                    </div>   
            </div>
        </main>

    )

}

export default Main;