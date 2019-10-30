import Link from 'next/link';
const MainLayout = props =>{

    return(
        <div className='container'>
        <div className='topbar'>
            <div className='logo-container'>
                <Link href='/'>
                    <a className='link'>Stock</a>
                </Link>
            </div>
            <div className='Menu-container'>

                <div>
                    <Link href='/products'>
                        <a className='link'>Product</a>
                    </Link>
                </div>

                <div>
                    <Link href='/manage'>
                        <a className='link'>Manage</a>
                    </Link>
                </div>
                <div>
                    <Link href='/profile'>
                        <a className='link'>Profile</a>
                    </Link>
                </div>
            </div>
        </div>
        <div class='content'>
            {props.children}
        </div>

        <style jsx global>{`
             @font-face{
                font-family:Montserrat;
                src:url(/static/fonts/Montserrat-Regular.ttf);
            }
            body{
                font-family:'Montserrat';
            }
        `}</style>

        {/*  ถ้าเพิ่ม global หลัง jsx จะใช้ได้ทั้งเว็บ*/}
        <style jsx>{`
        :global(body){
        
            margin:0;
        }
            .topbar{
                display: flex;
                flex-direction:row;
                justify-content: space-between;
                align-items:center;
                height: 32px;
                padding: 0 40px;
                box-shadow:rgb(0,0,0,0.2) 0px 1px 2px;

            }
            .Menu-container{
                display: flex;
                flex-direction:row;
            }
            .Menu-container div{
                margin-left:10px;
            }
            .link{
                text-decoration:none;
                color:black;
            }
        `}</style>


    </div>
    )
}

export default MainLayout;