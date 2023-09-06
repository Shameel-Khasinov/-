const soldier = {
    name: 'Baysangur',
    health: 10, // здоровье
    weapon: {  // оружие
        weapon_name: "Ak-47", //название
        weapon_cartridges: 10, // патроны в обойме
    },
    supplies: 3, // магазины / припасы

    fire: function () { // стрелять
        if (this.weapon.weapon_cartridges > 0) {
            this.weapon.weapon_cartridges--;
            console.log("бах-бах")
        } else {
            console.log("обойма пуста. Перезаредитесь")
        }
    },
    recharge: function () { // перезарядить
        if (this.supplies <= 0) {
            console.log("не осталось припасов")
        } else {
            this.weapon.weapon_cartridges = 30;
            this.supplies--;
            console.log('перезарядка...');
        }
    },
    damage: function () { // повредить

        if (this.health === 0) {
            console.log("Ты проиграл")
        } else {
            this.health--;
        }
    }
} 




soldier.damage()

console.log(soldier.name)
console.log(soldier.health)
console.log(soldier.weapon)
console.log(soldier.supplies)


