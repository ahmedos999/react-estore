import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
    PDFViewer,
  } from "@react-pdf/renderer";
  import img from './/imgs/companyLogo.jpg'

const PDF = ({data,isPending,error,getTotal}) => {
    var currentdate = new Date(); 
var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " - "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

// console.log(date);

// we will display the date as DD-MM-YYYY 

// let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
    const styles = StyleSheet.create({
        page: {
          backgroundColor: "white",
          color: "black",
        },
        section: {
          margin: 8,
          padding: 8,
        },
        logo:{
            width:60,
            height:60,
            margin:"0 auto"
        },
        date: {
            flexDirection: 'row',
            padding: 8,
            color:"gray",
          },
        row: {
            flexDirection: 'row',
            padding: 8,
            justifyContent:"space-between"
          },
          itemRow:{
            flexDirection: 'row',
            padding: 8,
            justifyContent:"space-between",
            borderBottom:"1px solid gray",
          },
        details: {
            fontSize: 10,
          },
          Itemdetails:{
            fontSize:8,
            color:"gray",
          },
          dateDetails: {
            fontSize: 8,
          },
        viewer: {
          width: window.innerWidth, //the pdf viewer will take up all of the width and height
          height: window.innerHeight,
        },
        title: {
            fontSize: 14,
            textAlign: "center",
            fontStyle: 'bold',
            // fontFamily: "Poppins",
          },
          footer: {
            borderTop:"1px solid gray",
            fontSize: 8,
            textAlign: "center",
            padding:8,
            // fontFamily: "Poppins",
          },
          footer2: {
            fontSize: 8,
            textAlign: "center",
            // fontFamily: "Poppins",
          },
      });
    return ( 
        <div>
        {isPending && <div>Loading...</div>}
        {error && <div> {error} </div>}
    {data&&<PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A6" style={styles.page}>
          <View style={styles.section}>
              <Image style={styles.logo} src={img}></Image>
            </View>
            <View style={styles.section}>
              <Text style={styles.title}>Recipt Voucher</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.dateDetails}>Date:</Text>
              <Text style={styles.dateDetails}>{datetime}</Text>
            </View>
            <View style={styles.itemRow}>
              <Text style={styles.details}>No of items:</Text>
              <Text style={styles.details}>{data.length}</Text>
            </View>
            {data.map((data)=>(
                <View style={styles.row}>
                <Text style={styles.Itemdetails}>{data.name}</Text>
                <Text style={styles.Itemdetails}>{data.price}$</Text>
              </View>
      ))}
            <View style={styles.row}>
              <Text style={styles.details}>SubTotal</Text>
              <Text style={styles.details}>{Number(getTotal(data)).toFixed(2)}$</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.details}>Delivery</Text>
              <Text style={styles.details}>Free</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.details}>VAT & TAX</Text>
              <Text style={styles.details}>{Number(getTotal(data)*0.15).toFixed(2)}$</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.details}>Total</Text>
              <Text style={styles.details}>{Number(getTotal(data)+getTotal(data)*0.15).toFixed(2)}$</Text>
            </View>
            <Text style={styles.footer}>Thanks for purching from us</Text>
            <Text style={styles.footer2}>have a nice day</Text>
          </Page>
        </Document>
      </PDFViewer>}
        </div> );
}
 
export default PDF;