import './Header.css'

const Menu = (props) => {

   const {menu} = props;
   let lastLabel = 100000;
   let currentLabel = 10000;

    const rect = (e) => {
        let info = document.getElementsByClassName('info');
        let rec = document.getElementsByClassName(`rec`)[0];
        let counter = 0;
        currentLabel = Number(e.target.dataset.mark);
        Array.from(info).forEach((e,i) => {
            let test = e.classList.contains('rec');
            console.log(test)
            if (test === false) {
                counter +=1;
            } else {
                lastLabel = i;
                console.log(lastLabel)
            }
        });

        if (counter === 4) {
            e.target.classList.add('rec');
        } else {
            console.log(currentLabel + 1);
            console.log(lastLabel)
            if (currentLabel !==lastLabel) {
                let content = document.getElementsByClassName(`content${currentLabel + 1}`)[0];
                rec.classList.remove('rec');
                content.classList.add('rec');
            }
        }
    }


    const menuHeader = menu.map((item, i) =>
        <div onClick={rect} className={`info content${i + 1}`} key={i} data-mark={i}>
            <img src={item.img}/>
            {item.info}
        </div>)

    return menuHeader;
}

export default Menu;