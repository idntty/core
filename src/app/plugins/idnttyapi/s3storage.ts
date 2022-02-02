import * as AWS from 'aws-sdk';
import * as fs from 'fs';

export const setupBucket = (_accessKeyId: string, _secretAccessKey: string, _bucket: string, logger: any ): Promise<any> => {
    
    return new Promise((resolve, reject) => {
        if (_accessKeyId.length == 0 || _secretAccessKey.length == 0) {
            return reject('AWS credentials is not provided');
        }

        const s3 = new AWS.S3({
            accessKeyId: _accessKeyId,
            secretAccessKey: _secretAccessKey
          });
        
        s3.listBuckets(function (err, data){
            if (err) {            
                return reject(err);
            }

            let isBucketExist = false;
            for (let bucket in data.Buckets) {
                if (_bucket == data.Buckets[bucket].Name) {isBucketExist = true;}                                
            }
            
            if (isBucketExist) {
                return resolve(s3);
            } else {                
                return reject('Bucket is not exist');
            }            
        });
    }).catch(function(error) {logger.error(error);});
}

export const uploadFile = (_client:S3, _fileName: string, _packageid: string, _bucket: string): Promise<any> => {
    const readStream = fs.createReadStream(_fileName);

    const params = {
        Bucket: _bucket,
        Key: _packageid,
        Body: readStream
      };

    return new Promise((resolve, reject) => {
        _client.upload(params, function(err, data) {
        readStream.destroy();        
        if (err) {
            return reject(err);
        }   
            fs.unlink(_fileName);     
            return resolve(data);
      });
    });
}

