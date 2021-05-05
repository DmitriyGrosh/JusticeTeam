import './Header.scss'

const Menu = (props) => {

   const {menu} = props;
   let lastLabel = 100000;
   let currentLabel = 100000;

    const rect = (e) => {
        let info = document.getElementsByClassName('info');
        let rec = document.getElementsByClassName(`rec`)[0];
        let counter = 0;
        currentLabel = Number(e.currentTarget.dataset.mark);

        Array.from(info).forEach((e, i, arr) => {
            if (i !== 4) {
                let test = e.classList.contains('rec');
                if (test === false) {
                    counter +=1;
                } else {
                    lastLabel = i;
                }
            }
        });


        if (counter === 4) {
            e.target.classList.add('rec');
        } else {
            if (currentLabel !==lastLabel) {
                let content = document.getElementsByClassName(`content${currentLabel + 1}`)[0];
                rec.classList.remove('rec');
                content.classList.add('rec');
            }
        }
    }

    const menuHeader = menu.map((item, i) =>

        <div onClick={rect} className={`info content${i + 1}`} key={item.id} data-mark={i}>
            <div className={'info-img'}>
                <img src={item.img}/>
            </div>
            <div className={'info-text'}>
                {item.info}
            </div>
        </div>)

    return menuHeader;
}

export default Menu;