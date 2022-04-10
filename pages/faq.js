import Layout from "../components/layout";
import style from "../styles/faq.module.css";

export default function FAQ() {
  return (
    <Layout>
      <div className={style.faq}>
        <h2>FAQ</h2>

        <div>
          <h3>Do you ship internationally?</h3>
          <p>
            Yes, we ship internationally. Make sure to enter your entire
            international address in English characters. Don't forget the Postal
            Code!
          </p>
          <h3>How much does shipping cost?</h3>
          <p>
            It really depends on what/how much you order. Shipping ranges
            anywhere between $3 and $$$.
          </p>
          <h3>Can I exchange an item for a different size?</h3>
          <p>
            Yes. We want happy customers. If your gear doesn't fit as expected,
            we'll be happy to exchange it for a different size. Contact us and
            we'll help you get squared away.
          </p>
          <h3>
            Where is my package? The tracking information hasn't updated in a
            long time. Can you tell me where it is?
          </h3>

          <p>For customers in North America: </p>
          <p>
            We only see the same tracking information as you. Domestic packages
            should be received within two weeks of shipping confirmation. Please
            contact us if you are a US customer and have not received your order
            after two weeks.
          </p>
          <p>For international customers outside of the Americas: </p>

          <p>
            We only see the same tracking information as you. International
            orders take much longer for shipping and processing. In some cases
            international orders can take up to 8 weeks from departure of the US
            to be delivered. If the tracking information was last in the US and
            hasn't updated recently, it is more than likely still making its way
            there. Once it arrives at that next destination, the package will be
            scanned and the tracking information will update. If it has been
            over 8 weeks since it has been updated, let us know and we can try
            shipping your order again at no additional cost to you.
          </p>
        </div>
      </div>
    </Layout>
  );
}
