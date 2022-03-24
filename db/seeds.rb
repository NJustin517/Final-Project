# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




#Users

u1 = User.create(username: "SkateBro", email: "123@yahoo.com", password: "cheese", password_confirmation: "cheese", profile_picture: "https://imgs.search.brave.com/iLEUvDK9AGB2LERZKtnMCY8Lnwk3KIs-6o9GBuDidkY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/aGlwdG9yby5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDcvSm9obi1DZW5h/LVdXRS1SYXctUmV0/dXJuLmpwZw", first_name: "John", last_name: "Cena")
u2 = User.create(username: "Sk8Rat33", email: "sk8@hotmail.com", password: "buttons", password_confirmation: "buttons", profile_picture: "https://imgs.search.brave.com/AAPVDfKiP-Sh24bjVaDBeEZ4yL5e1OxBtR7pSHTdXAk/rs:fit:1200:873:1/g:ce/aHR0cHM6Ly93d3cu/bmouY29tL3Jlc2l6/ZXIvcE9ldG01XzJa/bDlTdUYzV1M4d1hP/cmRiLWJFPS8xMjgw/eDAvc21hcnQvYWR2/YW5jZWxvY2FsLWFk/YXB0ZXItaW1hZ2Ut/dXBsb2Fkcy5zMy5h/bWF6b25hd3MuY29t/L2ltYWdlLm5qLmNv/bS9ob21lL25qby1t/ZWRpYS93aWR0aDIw/NDgvaW1nL2VudGVy/dGFpbm1lbnRfaW1w/YWN0X3R2L3Bob3Rv/L25pY29sYXMtY2Fn/ZS1wb3J0LW9mLWNh/bGwtaW50ZXJ2aWV3/anBnLWRlNWE3NTdj/NGMzMTdkMzIuanBn", first_name: "Nic", last_name: "Cage")
u3 = User.create(username: "ILoveSkateboarding", email: "woohoo@optonline.net", password: "skate", password_confirmation: "skate", profile_picture: "https://imgs.search.brave.com/V4qPC1qlVTc9q18aJ3TyRJ2lGLi9q6jxl6GF_-ELqOY/rs:fit:706:437:1/g:ce/aHR0cHM6Ly9zdGF0/aWMta29pbW9pLmFr/YW1haXplZC5uZXQv/d3AtY29udGVudC9u/ZXctZ2FsbGVyaWVz/LzIwMjAvMDkvdW5j/aGFydGVyZWQtbm9s/YW4tbm9ydGgtd2Fz/bnQtY29udGFjdGVk/LWZvci10aGUtZmls/bS10aGUtdm8tYWN0/b3ItdGFsa3MtYWJv/dXQtaXQwMDEuanBn", first_name: "Nolan", last_name: "North")
u4 = User.create(username: "HelloThere", email: "hello@gmail.com", password: "jedi", password_confirmation: "jedi", profile_picture: "https://imgs.search.brave.com/Nd-xftofo7gCehpObLJcHfbAnPfeQW8DZPh7I1m4RCU/rs:fit:1200:1200:1/g:ce/aHR0cDovL21ha2Vm/YWN0cy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMTAv/anBtZWl4dHBocWQx/MS1zY2FsZWQuanBn", first_name: "Ewan", last_name: "McGregor")
u5 = User.create(username: "The Viper", email: "viper@gmail.com", password: "GoT", password_confirmation: "GoT", profile_picture: "https://imgs.search.brave.com/aayzwGMZqsRgJxvsaR9qcLVsxml-0PWudTm3yf_x0-c/rs:fit:550:494:1/g:ce/aHR0cHM6Ly9wYWtp/c3RhbmkucGsvdXBs/b2Fkcy9yZXZpZXdz/L3Bob3Rvcy9vcmln/aW5hbC83OS8yYS8w/ZC9QZWRybzIwUGFz/Y2FsMjAzLTIzLTE1/Mjk0MjM4MDMuanBn", first_name: "Pedro", last_name: "Pascal")
u6 = User.create(username: "Prof. seXy", email: "xavier@yahoo.com", password: "Magnet0", password_confirmation: "Magnet0", profile_picture: "https://imgs.search.brave.com/6RgU9eCoAFl6C7elRIMZkB_9pUt2IIEhyyupXkVS3Qw/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9ob2xs/eXdvb2RzaWx2ZXJz/Y3JlZW4uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEy/L3BhdHJpY2tzdGV3/YXJ0X3NwcnJrbGVf/cGV0cmFfZGVldGVy/LmpwZw", first_name: "Patrick", last_name: "Stewart")
u7 = User.create(username: "Tenacios Jack", email: "theBeardedWonder@hotmail.com", password: "r0cketSauce", password_confirmation: "r0cketSauce", profile_picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/2016_RiP_Tenacious_D_-_Jack_Black_-_by_2eight_-_8SC8891.jpg/220px-2016_RiP_Tenacious_D_-_Jack_Black_-_by_2eight_-_8SC8891.jpg", first_name: "Jack", last_name: "Black")
u8 = User.create(username: "Carnitas Burrito", email: "HIMYM@live.com", password: "mArshall", password_confirmation: "mArshall", profile_picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Jason_Segel_Sundance_2017.jpg/220px-Jason_Segel_Sundance_2017.jpg", first_name: "Jason", last_name: "Siegel")
